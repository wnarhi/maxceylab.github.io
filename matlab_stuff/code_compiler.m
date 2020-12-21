clc; clear;
cwd = '/Users/scotti.5/Documents/GitHub/maxceylab.github.io/stimuli/unique';
imagefiles = dir(fullfile(cwd, ('*.png')));
nfiles = length(imagefiles);    % Number of files found

% cd output

preset = ['<img id="IDN" src="https://maxceylab.github.io/stimuli/unique/Object.jpg" style="margin-left:-1000px;margin-top:-2000px">'];
code = [];
for i = 1:nfiles
    presetNew = strrep(preset,'Object.jpg',[imagefiles(i).name]);
    presetNew = strrep(presetNew,'IDN',[imagefiles(i).name(:,1:end-4)]);
    code = strcat(code,presetNew);
    presetNew = [];
    % rename image file
%     copyfile(fullfile(cwd,[imagefiles(i).name]),['Obj20_',num2str(10+i),'.jpg']);
end
disp('done');