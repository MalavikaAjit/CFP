//without using curring
function volume(length, width, height) {
    return length * width * height;
 }
 document.write((volume(11,2,3)));

 //currying is used 
 function volume(length) {
    return function(width) {
       return function(height) {
          return height * width * length;
       }
    }
 }
document.write(volume(11)(2)(3))
