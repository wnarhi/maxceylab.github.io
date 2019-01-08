imagefiles = dir(fullfile(pwd, ('*.jpg')));
nfiles = length(imagefiles);    % Number of files found
load('colorwheel360.mat');
for i=5:5 %nfiles
   currentfilename = imagefiles(i).name;
   currentimage = imread([currentfilename]);
   [posterizedimage, alpha] = posterize_paul(currentimage,fullcolormatrix(310,1,1),fullcolormatrix(310,2,1),fullcolormatrix(310,3,1));
   f = imshow(posterizedimage);
%    set(f, 'AlphaData', alpha);
   saveas(f,['TemplateG' num2str(100+i) '.png']);
end