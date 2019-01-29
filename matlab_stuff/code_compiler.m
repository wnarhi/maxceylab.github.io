clc; clear;
cwd = '/Users/scotti.5/Documents/GitHub/maxceylab.github.io/stimuli/come';
imagefiles = dir(fullfile(cwd, ('*kit*.jpg')));
nfiles = length(imagefiles);    % Number of files found

cd output 

preset = ['<img id="IDN" src="https://maxceylab.github.io/stimuli/compelling_objects/Object.jpg" style="margin-left:-1000px;margin-top:-2000px">'];
code = [];
for i = 1:nfiles
    presetNew = strrep(preset,'Object',['Obj20_',num2str(10+i)]);
    presetNew = strrep(presetNew,'IDN',['Obj20_',num2str(10+i)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
    copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj20_',num2str(10+i),'.jpg']);
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