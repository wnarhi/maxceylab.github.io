clc; clear;
cwd = '/Users/scotti.5/Documents/GitHub/maxceylab.github.io/stimuli/change_detection';
imagefiles = dir(fullfile(cwd, ('*.png')));
nfiles = length(imagefiles);    % Number of files found

cd output

preset = ['<img id="IDN" src="https://maxceylab.github.io/stimuli/change_detection/Object.png" style="margin-left:-1000px;margin-top:-1000px">'];
code = [];
for i = 1:nfiles
    presetNew = strrep(preset,'Object',[imagefiles(i).name]);
    presetNew = strrep(presetNew,'IDN',[imagefiles(i).name]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
%     copyfile(fullfile(cwd,[imagefiles(i).name]),['Letter_',num2str(10+i),'.png']);
end
% 
% imagefiles = dir(fullfile(cwd, ('arial*.png')));
% nfiles = length(imagefiles);    % Number of files found
% for i = 1:nfiles
%     presetNew = strrep(preset,'Object',['Obj12_',num2str(10+i)]);
%     presetNew = strrep(presetNew,'IDN',['Obj12_',num2str(10+i)]);
%     code = strcat(code,presetNew);
%     presetNew = [];
%     % rename image file
%     copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj12_',num2str(10+i),'.png']);
% end
% 
% imagefiles = dir(fullfile(cwd, ('Comicsans*.png')));
% nfiles = length(imagefiles);    % Number of files found
% for i = 1:nfiles
%     presetNew = strrep(preset,'Object',['Obj13_',num2str(10+i)]);
%     presetNew = strrep(presetNew,'IDN',['Obj13_',num2str(10+i)]);
%     code = strcat(code,presetNew);
%     presetNew = [];
%     % rename image file
%     copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj13_',num2str(10+i),'.png']);
% end
% 
% imagefiles = dir(fullfile(cwd, ('Curlz*.png')));
% nfiles = length(imagefiles);    % Number of files found
% for i = 1:nfiles
%     presetNew = strrep(preset,'Object',['Obj14_',num2str(10+i)]);
%     presetNew = strrep(presetNew,'IDN',['Obj14_',num2str(10+i)]);
%     code = strcat(code,presetNew);
%     presetNew = [];
%     % rename image file
%     copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj14_',num2str(10+i),'.png']);
% end
% 
% imagefiles = dir(fullfile(cwd, ('elephant*.png')));
% nfiles = length(imagefiles);    % Number of files found
% for i = 1:nfiles
%     presetNew = strrep(preset,'Object',['Obj15_',num2str(10+i)]);
%     presetNew = strrep(presetNew,'IDN',['Obj15_',num2str(10+i)]);
%     code = strcat(code,presetNew);
%     presetNew = [];
%     % rename image file
%     copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj15_',num2str(10+i),'.png']);
% end
% 
% imagefiles = dir(fullfile(cwd, ('impact*.png')));
% nfiles = length(imagefiles);    % Number of files found
% for i = 1:nfiles
%     presetNew = strrep(preset,'Object',['Obj16_',num2str(10+i)]);
%     presetNew = strrep(presetNew,'IDN',['Obj16_',num2str(10+i)]);
%     code = strcat(code,presetNew);
%     presetNew = [];
%     % rename image file
%     copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj16_',num2str(10+i),'.png']);
% end
% 
% imagefiles = dir(fullfile(cwd, ('Papyrus*.png')));
% nfiles = length(imagefiles);    % Number of files found
% for i = 1:nfiles
%     presetNew = strrep(preset,'Object',['Obj17_',num2str(10+i)]);
%     presetNew = strrep(presetNew,'IDN',['Obj17_',num2str(10+i)]);
%     code = strcat(code,presetNew);
%     presetNew = [];
%     % rename image file
%     copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj17_',num2str(10+i),'.png']);
% end
% 
% imagefiles = dir(fullfile(cwd, ('roman*.png')));
% nfiles = length(imagefiles);    % Number of files found
% for i = 1:nfiles
%     presetNew = strrep(preset,'Object',['Obj18_',num2str(10+i)]);
%     presetNew = strrep(presetNew,'IDN',['Obj18_',num2str(10+i)]);
%     code = strcat(code,presetNew);
%     presetNew = [];
%     % rename image file
%     copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj18_',num2str(10+i),'.png']);
% end
% 
% imagefiles = dir(fullfile(cwd, ('snap*.png')));
% nfiles = length(imagefiles);    % Number of files found
% for i = 1:nfiles
%     presetNew = strrep(preset,'Object',['Obj19_',num2str(10+i)]);
%     presetNew = strrep(presetNew,'IDN',['Obj19_',num2str(10+i)]);
%     code = strcat(code,presetNew);
%     presetNew = [];
%     % rename image file
%     copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj19_',num2str(10+i),'.png']);
% end
% 
% imagefiles = dir(fullfile(cwd, ('Terminal*.png')));
% nfiles = length(imagefiles);    % Number of files found
% for i = 1:nfiles
%     presetNew = strrep(preset,'Object',['Obj20_',num2str(10+i)]);
%     presetNew = strrep(presetNew,'IDN',['Obj20_',num2str(10+i)]);
%     code = strcat(code,presetNew);
%     presetNew = [];
%     % rename image file
%     copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj20_',num2str(10+i),'.png']);
% end

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