clc;clear all;
setB=[];setRP=[];
for cat=1:9
    if any(cat == [12,14,17,2,4,10])
        for exem=1:18
            setRP=[setRP;'Obj0',num2str(cat),'_',num2str(10+exem)];
        end
    else
        for exem=1:12
            setB=[setB;'Obj0',num2str(cat),'_',num2str(10+exem)];
        end
    end
end
for cat=10:18
    if any(cat == [12,14,17,2,4,10])
        for exem=1:18
            setRP=[setRP;'Obj',num2str(cat),'_',num2str(10+exem)];
        end
    else
        for exem=1:12
            setB=[setB;'Obj',num2str(cat),'_',num2str(10+exem)];
        end
    end
end