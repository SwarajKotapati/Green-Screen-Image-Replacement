# Green Screen

A Pen created on CodePen.io. Original URL: [https://codepen.io/Swarajkotap/pen/OJMNErR](https://codepen.io/Swarajkotap/pen/OJMNErR).

Ever wonder how a simple green screen can be replaced by any image. Just like the below examples.

![green-screen-chroma-key-weather-man](https://user-images.githubusercontent.com/70504997/209974390-9096c701-4009-4e7e-b4ce-f5460945bb2e.jpg)

![Green_screens_compare_with_Iman_Crosson_20110524](https://user-images.githubusercontent.com/70504997/209974397-466be540-c8ec-4e1e-b18b-8ec4d079ef1b.png)

Well its simple and you can create an application yourself.

The idea goes like this : 

1. You treat the image in terms of individual pixels
2. Each pixel has a RGB value . This value determines the amount of the Red, Green and Blue color in the certain pixel.
3. You have green image and target image

Steps :

1. Iterate through the green image row wise
2. If you encounter a green pixel at (row_i, col_i)
3. Replace that pixel with the pixel at (row_i, col_i) in target image.

Boom ! You got youself a image replacement algorithm. Now you can replace not only green pixels , but pixels of your color choice. 
Go on ! Create some exciting stuff !!

