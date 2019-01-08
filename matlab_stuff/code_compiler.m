clc; clear;
cwd = 'C:\Users\paulp\Documents\GitHub\maxceylab.github.io\stimuli\objects\';
imagefiles = dir(fullfile(cwd, ('apple*.jpg')));
nfiles = length(imagefiles);    % Number of files found


preset = ['<img id="IDN" src="https://paulscotti.github.io/mturk/Cont_LTM_101_files/objects/Object.jpg" style="margin-left:-1000px">'];
code = [];
for i = 1:nfiles
    presetNew = strrep(preset,'Object',['Obj01_',num2str(10+i)]);
    presetNew = strrep(presetNew,'IDN',['Obj01_',num2str(10+i)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
    copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj01_',num2str(10+i),'.jpg']);
end

imagefiles = dir(fullfile(cwd, ('backpack*.jpg')));
nfiles = length(imagefiles);    % Number of files found
for i = 1:nfiles
    presetNew = strrep(preset,'Object',['Obj02_',num2str(10+i)]);
    presetNew = strrep(presetNew,'IDN',['Obj02_',num2str(10+i)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
    copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj02_',num2str(10+i),'.jpg']);
end

imagefiles = dir(fullfile(cwd, ('jar*.jpg')));
nfiles = length(imagefiles);    % Number of files found
for i = 1:nfiles
    presetNew = strrep(preset,'Object',['Obj03_',num2str(10+i)]);
    presetNew = strrep(presetNew,'IDN',['Obj03_',num2str(10+i)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
    copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj03_',num2str(10+i),'.jpg']);
end

imagefiles = dir(fullfile(cwd, ('bear*.jpg')));
nfiles = length(imagefiles);    % Number of files found
for i = 1:nfiles
    presetNew = strrep(preset,'Object',['Obj04_',num2str(10+i)]);
    presetNew = strrep(presetNew,'IDN',['Obj04_',num2str(10+i)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
    copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj04_',num2str(10+i),'.jpg']);
end

imagefiles = dir(fullfile(cwd, ('bonzai*.jpg')));
nfiles = length(imagefiles);    % Number of files found
for i = 1:nfiles
    presetNew = strrep(preset,'Object',['Obj05_',num2str(10+i)]);
    presetNew = strrep(presetNew,'IDN',['Obj05_',num2str(10+i)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
    copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj05_',num2str(10+i),'.jpg']);
end

imagefiles = dir(fullfile(cwd, ('bowtie*.jpg')));
nfiles = length(imagefiles);    % Number of files found
for i = 1:nfiles
    presetNew = strrep(preset,'Object',['Obj06_',num2str(10+i)]);
    presetNew = strrep(presetNew,'IDN',['Obj06_',num2str(10+i)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
    copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj06_',num2str(10+i),'.jpg']);
end

imagefiles = dir(fullfile(cwd, ('butterfly*.jpg')));
nfiles = length(imagefiles);    % Number of files found
for i = 1:nfiles
    presetNew = strrep(preset,'Object',['Obj07_',num2str(10+i)]);
    presetNew = strrep(presetNew,'IDN',['Obj07_',num2str(10+i)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
    copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj07_',num2str(10+i),'.jpg']);
end

imagefiles = dir(fullfile(cwd, ('cake*.jpg')));
nfiles = length(imagefiles);    % Number of files found
for i = 1:nfiles
    presetNew = strrep(preset,'Object',['Obj08_',num2str(10+i)]);
    presetNew = strrep(presetNew,'IDN',['Obj08_',num2str(10+i)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
    copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj08_',num2str(10+i),'.jpg']);
end

imagefiles = dir(fullfile(cwd, ('candle*.jpg')));
nfiles = length(imagefiles);    % Number of files found
for i = 1:nfiles
    presetNew = strrep(preset,'Object',['Obj09_',num2str(10+i)]);
    presetNew = strrep(presetNew,'IDN',['Obj09_',num2str(10+i)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
    copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj09_',num2str(10+i),'.jpg']);
end

imagefiles = dir(fullfile(cwd, ('chair*.jpg')));
nfiles = length(imagefiles);    % Number of files found
for i = 1:nfiles
    presetNew = strrep(preset,'Object',['Obj10_',num2str(10+i)]);
    presetNew = strrep(presetNew,'IDN',['Obj10_',num2str(10+i)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
    copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj10_',num2str(10+i),'.jpg']);
end

imagefiles = dir(fullfile(cwd, ('clock*.jpg')));
nfiles = length(imagefiles);    % Number of files found
for i = 1:nfiles
    presetNew = strrep(preset,'Object',['Obj11_',num2str(10+i)]);
    presetNew = strrep(presetNew,'IDN',['Obj11_',num2str(10+i)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
    copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj11_',num2str(10+i),'.jpg']);
end

imagefiles = dir(fullfile(cwd, ('donut*.jpg')));
nfiles = length(imagefiles);    % Number of files found
for i = 1:nfiles
    presetNew = strrep(preset,'Object',['Obj12_',num2str(10+i)]);
    presetNew = strrep(presetNew,'IDN',['Obj12_',num2str(10+i)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
    copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj12_',num2str(10+i),'.jpg']);
end

imagefiles = dir(fullfile(cwd, ('fan*.jpg')));
nfiles = length(imagefiles);    % Number of files found
for i = 1:nfiles
    presetNew = strrep(preset,'Object',['Obj13_',num2str(10+i)]);
    presetNew = strrep(presetNew,'IDN',['Obj13_',num2str(10+i)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
    copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj13_',num2str(10+i),'.jpg']);
end

imagefiles = dir(fullfile(cwd, ('feather*.jpg')));
nfiles = length(imagefiles);    % Number of files found
for i = 1:nfiles
    presetNew = strrep(preset,'Object',['Obj14_',num2str(10+i)]);
    presetNew = strrep(presetNew,'IDN',['Obj14_',num2str(10+i)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
    copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj14_',num2str(10+i),'.jpg']);
end

imagefiles = dir(fullfile(cwd, ('fish*.jpg')));
nfiles = length(imagefiles);    % Number of files found
for i = 1:nfiles
    presetNew = strrep(preset,'Object',['Obj15_',num2str(10+i)]);
    presetNew = strrep(presetNew,'IDN',['Obj15_',num2str(10+i)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
    copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj15_',num2str(10+i),'.jpg']);
end

imagefiles = dir(fullfile(cwd, ('fridge*.jpg')));
nfiles = length(imagefiles);    % Number of files found
for i = 1:nfiles
    presetNew = strrep(preset,'Object',['Obj16_',num2str(10+i)]);
    presetNew = strrep(presetNew,'IDN',['Obj16_',num2str(10+i)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
    copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj16_',num2str(10+i),'.jpg']);
end

imagefiles = dir(fullfile(cwd, ('umbrella*.jpg')));
nfiles = length(imagefiles);    % Number of files found
for i = 1:nfiles
    presetNew = strrep(preset,'Object',['Obj17_',num2str(10+i)]);
    presetNew = strrep(presetNew,'IDN',['Obj17_',num2str(10+i)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
    copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj17_',num2str(10+i),'.jpg']);
end

imagefiles = dir(fullfile(cwd, ('glove*.jpg')));
nfiles = length(imagefiles);    % Number of files found
for i = 1:nfiles
    presetNew = strrep(preset,'Object',['Obj18_',num2str(10+i)]);
    presetNew = strrep(presetNew,'IDN',['Obj18_',num2str(10+i)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
    copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj18_',num2str(10+i),'.jpg']);
end

% code2 = [];
% imgnum = ['x,'];
% 
% % for i = 1:300
% %     imgnumNew = strrep(imgnum,'x',[num2str(100+i)]);
% %     imgnumNew = strrep(imgnumNew,'IDN',[num2str(100+i)]);
% %     code2 = strcat(code2,imgnumNew);
% %     imgnumNew = [];
% % end
% for i = 1:51
%     imgnumNew = strrep(imgnum,'x',num2str(0));
%     code2 = strcat(code2,imgnumNew);
%     imgnumNew = [];
% end
% for i = 52:(51+17)
%     imgnumNew = strrep(imgnum,'x',num2str(1));
%     code2 = strcat(code2,imgnumNew);
%     imgnumNew = [];
% end
% for i = (51+17+1):(51+17+17)
%     imgnumNew = strrep(imgnum,'x',num2str(2));
%     code2 = strcat(code2,imgnumNew);
%     imgnumNew = [];
% end
% for i = (51+17+17+1):(51+17+17+17)
%     imgnumNew = strrep(imgnum,'x',num2str(3));
%     code2 = strcat(code2,imgnumNew);
%     imgnumNew = [];
% end