% Image Manipulation & Posterization Tool (Paul Scotti 2019)

clc; clear; close all;

imagedir = '../stimuli/objects/';

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
   currentfilename = imagefiles(i).name;
   currentimage = imread([currentfilename]); 
   
   disp(['Current file:' currentfilename]);
   
   e = imresize(rgb2gray(currentimage),[256,256]);
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
   f2 = figure;set(gcf,'Position',[0 0 0 0]);
   f = figure;
   imshow(posterizedimage);
   
   disp('Click image and use left/right arrows to adjust darkness threshold & up/down to adjust lightness threshold.');
   disp('Press s key to save and proceed to next image. q key to quit.');

  % Set the KeyPressFcn Callback
   set(f,'KeyPressFcn',{@myfun,r1,g1,b1,currentimage,minThresh,maxThresh});
   
   waitfor(f2);
   
   if quit_out == 1
       break;
   end
   
   g = imshow(posterizedimage);
   disp(['Saved as ',currentfilename(1:end-4),'.png']);
   saveas(g,['output/' currentfilename(1:end-4) '.png']);
   close all;
end

function myfun(src,event,r1,g1,b1,currentimage,minThresh,maxThresh)
   if strcmp(event.Key,'rightarrow')
       close;
       f = figure;
       maxThresh = maxThresh + 2.5;
       [posterizedimage, alpha] = posterize_paul(currentimage,r1,g1,b1,100,maxThresh);
       imshow(posterizedimage)
       set(f,'KeyPressFcn',{@myfun,r1,g1,b1,currentimage,minThresh,maxThresh});
   elseif strcmp(event.Key,'leftarrow')
       close;
       f = figure;
       maxThresh = maxThresh - 2.5;
       [posterizedimage, alpha] = posterize_paul(currentimage,r1,g1,b1,minThresh,maxThresh);
       imshow(posterizedimage)
       set(f,'KeyPressFcn',{@myfun,r1,g1,b1,currentimage,minThresh,maxThresh});
   elseif strcmp(event.Key,'uparrow')
       close;
       f = figure;
       minThresh = minThresh + 5;
       [posterizedimage, alpha] = posterize_paul(currentimage,r1,g1,b1,100,maxThresh);
       imshow(posterizedimage)
       set(f,'KeyPressFcn',{@myfun,r1,g1,b1,currentimage,minThresh,maxThresh});
   elseif strcmp(event.Key,'downarrow')
       close;
       f = figure;
       minThresh = minThresh - 5;
       [posterizedimage, alpha] = posterize_paul(currentimage,r1,g1,b1,minThresh,maxThresh);
       imshow(posterizedimage)
       set(f,'KeyPressFcn',{@myfun,r1,g1,b1,currentimage,minThresh,maxThresh});
   end
   fprintf('minThresh: %.1f, maxThresh: %.1f \n', minThresh, maxThresh)
   if strcmp(event.Key,'q')
       global quit_out
       quit_out = 1
       close all;
   elseif strcmp(event.Key,'s')
       fprintf('minThresh: %.1f, maxThresh: %.1f \n', minThresh, maxThresh)
       close all;
   end
end