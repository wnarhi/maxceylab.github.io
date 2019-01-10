function [y, alpha] = posterize_paul(image, colorR, colorG, colorB, minThresh, maxThresh)
r = image(:,:,1); 
try
g = image(:,:,2);
b = image(:,:,3);
catch
g = image(:,:,1);
b = image(:,:,1);
end
alpha = image(:,:,1);

%make alpha layer around the object (otherwise has white background pixels)
for row = 1:length(image(:,1,1))
    for col = 1:length(image(1,:,1))
        if r(row,col) > 220 && g(row,col) > 220 && b(row,col) > 220
            alpha(row,col) = 0;
        else
            alpha(row,col) = 255;
        end
    end
end

%posterize
for row = 1:length(image(:,1,1))
    for col = 1:length(image(1,:,1))
        if r(row,col) > maxThresh || g(row,col) > maxThresh || b(row,col) > maxThresh
            r(row,col,1) = 255;
            g(row,col,1) = 255;
            b(row,col,1) = 255;
        elseif r(row,col) < minThresh || g(row,col) < minThresh || b(row,col) < minThresh
            r(row,col,1) = 0;
            g(row,col,1) = 0;
            b(row,col,1) = 0;
        else
            r(row,col) = colorR;
            g(row,col) = colorG;
            b(row,col) = colorB;
        end
    end
end
% a = posterize(image,2,[minThresh maxThresh]);
% y = uint8(posterize(a,2,[minThresh maxThresh]));
% r = y(:,:,1); 
% g = y(:,:,2);
% b = y(:,:,3);
% ro = r;

% %condense into 3 base colors (black white magenta)
% r(ro ~= g | ro ~= b) = colorR;
% g(ro ~= g | ro ~= b) = colorG;
% b(ro ~= g | ro ~= b) = colorB;

y(:,:,1) = r;
y(:,:,2) = g;
y(:,:,3) = b;
end