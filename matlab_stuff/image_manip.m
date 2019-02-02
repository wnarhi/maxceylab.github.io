% Image Manipulation & Posterization Tool (Paul Scotti 2019)

%% HOW TO USE %%
% Click 'run' and you will be asked to select a folder. Select the folder that contains your images. 
% You will then have a pop-up of the first image in your folder, as well as another pop-up with an intensity histogram of the image. 
% This histogram represents all the pixels in the image, with more leftward pixels being lighter and more rightward pixels being darker.
% Generally there will be one bump in the center and a spike on the far right. Adjust the ends of the red vertical bars such that the image
% looks better, which typically means moving the left red bar until it hits the start of the center bump, and moving the far right bar until 
% it excludes any of the far-right spike. Here is an example: https://puu.sh/Cw7Da/0397428c6c.png. Once you've adjusted the red bars, 
% type 'x' in the matlab command window and hit Enter. You could also type 'k' to move on to the next image in your folder without saving
% the current image, or 'q' to quit. You will now be asked to adjust brightness. If the image seems like it looks fine, type '1' and hit enter.
% If the image seems a bit dark, type a number lower than 1 and hit enter, and if the image seems a bit too bright, type a number 
% larger than 1 (can be decimals) and hit enter. Repeat until it looks good, and then type 'x' and hit Enter. Now the image will change 
% into a posterized form, meaning that only white, pink, and black pixel colors are in the image. You now need to adjust the threshold until
% the image looks best. Click the image, then tap right arrow key to reduce the number of white pixels and left arrow key to increase number 
% of white pixels. Up/down arrow keys adjust number of black pixels. Press 'q' to quit at any time and 's' to save the current image
% in the output folder. As an example, this looks good (https://puu.sh/Cw7NT/f40a5a30f8.png) and this looks bad (https://puu.sh/Cw7Qt/f3c276f339.png).
% It should look as recognizeable as possible as the original image, just with a constrained range of colors. 

clc; clear; close all;

% imagedir = '../stimuli/objects/';
imagedir = uigetdir;

addpath(imagedir);
imagefiles = dir(fullfile(imagedir, ('*.jpg')));
nfiles = length(imagefiles);    % Number of files found

r1 = 205;
g1 = 82;
b1 = 171;

global quit_out
quit_out = 0;

for i=1:nfiles
   gamma = 1; 
   global g;
   currentfilename = imagefiles(i).name;
   currentimage = imread([currentfilename]); 
   
   disp(['Current file:' currentfilename]);
   
   try
   e = imresize(rgb2gray(currentimage),[256,256]);
   catch
   e = imresize(currentimage,[256,256]);
   end
   
   imshow(e)
   imcontrast()
   
   while 1
        str = input('Adjust Contrast. Type x and hit ENTER to continue (q to quit, k to skip to next object): ','s')
        if str == 'x'
            break;
        elseif str == 'q'
            break;
        elseif str == 'k'
            break;
        end
   end
   
   if str == 'k'
       continue;
   end
   
   ax = gca;
   e2 = ax.CLim;
   currentimage = imadjust(e,[e2(1)/255 e2(2)/255],[0 1],gamma);
   
   close all;
   
   if str == 'q'
       break;
   end
   
   while 1
       imshow(currentimage);
       str = input('Brightness Value (default = 1) (type x to continue): ','s')
       if str == 'x'
           break;
       elseif str == 'q'
            break;
       else
           gamma = str2num(str);
           currentimage = imadjust(e,[e2(1)/255 e2(2)/255],[0 1],gamma);
       end
   end
   
   close all;
   
   if str == 'q'
       break;
   end
  
   %initial posterized image
   maxThresh = 170; minThresh = 85; 
   [posterizedimage, alpha] = posterize_paul(currentimage,r1,g1,b1,minThresh,maxThresh);
   global f2; 
   f2 = figure;
   set(gcf,'Position',[0 0 0 0]);
   f = figure;
   g = imshow(posterizedimage);
   
   disp('Click image and use left/right arrows to adjust darkness threshold & up/down to adjust lightness threshold.');
   disp('Press s key to save and proceed to next image. q key to quit.');

  % Set the KeyPressFcn Callback
   set(f,'KeyPressFcn',{@myfun,r1,g1,b1,currentimage,minThresh,maxThresh});
   
   waitfor(f2);
   
   if quit_out == 1
       break;
   end
   
   disp(['Saved as ',currentfilename(1:end-4),'.png']);
   try
   saveas(g,['output/' currentfilename(1:end-4) '.png']);
   catch
   mkdir('output');
   saveas(g,['output/' currentfilename(1:end-4) '.png']);
   end
   
   close all;
end

function myfun(src,event,r1,g1,b1,currentimage,minThresh,maxThresh)
   global g
   global f2
   if strcmp(event.Key,'rightarrow')
       close;
       f = figure;
       maxThresh = maxThresh + 5;
       [posterizedimage, alpha] = posterize_paul(currentimage,r1,g1,b1,100,maxThresh);
       g = imshow(posterizedimage);
       set(f,'KeyPressFcn',{@myfun,r1,g1,b1,currentimage,minThresh,maxThresh});
   elseif strcmp(event.Key,'leftarrow')
       close;
       f = figure;
       maxThresh = maxThresh - 5;
       [posterizedimage, alpha] = posterize_paul(currentimage,r1,g1,b1,minThresh,maxThresh);
       g = imshow(posterizedimage);
       set(f,'KeyPressFcn',{@myfun,r1,g1,b1,currentimage,minThresh,maxThresh});
   elseif strcmp(event.Key,'uparrow')
       close;
       f = figure;
       minThresh = minThresh + 5;
       [posterizedimage, alpha] = posterize_paul(currentimage,r1,g1,b1,100,maxThresh);
       g = imshow(posterizedimage);
       set(f,'KeyPressFcn',{@myfun,r1,g1,b1,currentimage,minThresh,maxThresh});
   elseif strcmp(event.Key,'downarrow')
       close;
       f = figure;
       minThresh = minThresh - 5;
       [posterizedimage, alpha] = posterize_paul(currentimage,r1,g1,b1,minThresh,maxThresh);
       g = imshow(posterizedimage);
       set(f,'KeyPressFcn',{@myfun,r1,g1,b1,currentimage,minThresh,maxThresh});
   end
   fprintf('minThresh: %.1f, maxThresh: %.1f \n', minThresh, maxThresh)
   if strcmp(event.Key,'q')
       global quit_out
       quit_out = 1
       close all;
   elseif strcmp(event.Key,'s')
       fprintf('minThresh: %.1f, maxThresh: %.1f \n', minThresh, maxThresh)
       close(f2);
   end
end