/****************************************************************
* @author: Dryang
* @web: https://yangspot.com
* @date: 2018-09-09
* @src: http://www.cnblogs.com/MythLeige/p/6047838.html
****************************************************************/

var str1 = "abcdefgh";
var str2 = "abcdcba";

demo1 = (str) => {
    document.write(str.split(""),"<br>");
    return str == str.split("").reverse().join("");
}

function demo2(str) {
    console.log("original text is:", str);
    console.log("split: ", str.split(""));
    console.log('split + reverse: ', str.split('').reverse());
    console.log('split + reverse + join: ', str.split('').reverse().join(''));
}

console.log("str1 is : ", demo1(str1)); // false
console.log("str2 is : ", demo1(str2)); // ture

demo2(str1);
demo2(str2);

/************************* Seperate Line *************************/

/*The indexOf() method returns the first index 
 *at which a given element can be found in the array, 
 *or -1 if it is not present.
 */

var arr1 = [2, 4, 2, 2, 5, 6, 7, 8, 9, 9, 9];
function  demo3(arr) {
    let arr_temp = []; // a container for repeat elements
    for (let m = 0; m < arr.length; m++) {
        if (arr_temp.indexOf(arr[m]) == -1) // if not exist return -1
            arr_temp.push(arr[m]);
    }
    return arr_temp;
}
document.write("the original array is  : ", arr1, "<br>");
document.write("the new array is : ", demo3(arr1), "<br>");

/************************* Seperate Line *************************/

var str1 = 'jhadfgskjfajhdewqe';
var arr1 = str1.split("");

document.write("split() = ", arr1, "<br>");

function demo4() {
    var arrA = [];
    var arrB = [];
    for (let m = 0; m < arr1.length; m++) {
        if (arrA.indexOf(arr1[m]) == -1) {
            arrA.push(arr1[m]);
            arrB.push(1);
        }
        else {
            let arrA_position = arrA.indexOf(arr1[m]);
            arrB[arrA_position]++;
        }
    }

    console.log("no repeat = ", arrA); // no repeat element
    console.log("number of repeat letters = ", arrB); // correspond times of the element
   
    let array1 = [1, 4, 2];
    console.log("array 1 type is : ", typeof(array1));
    console.log(Math.max(...array1));
    // expected output: 3

    console.log(typeof(arrB));
    console.log(Math.max(...arrB));
    
    //one method to find the biggest number
    console.log(arrA[arrB.indexOf(Math.max(...arrB))]);
    //use apply to find the biggest number
    console.log(arrA[arrB.indexOf(Math.max.apply(Math,arrB))]);  

}

demo4();

//demo of apply()
var obj_1 =
{
    fullNmae: function(city,country)
    {
        return this.firstName+this.lastName+","+city+" "+country;
    }
}
var obj_2=
{
    firstName :"DrYang",
    lastName: "Studio"
}
console.log(obj_1.fullNmae.apply(obj_2,["Birmingham","UK"]));

//demo of max
console.log(Math.max(1,2,3,3));
console.log(Math.max.apply(null,[1,2,3,3]));
console.log(Math.max.apply(Math,[1,2,3,4]));

var arr_Max=[1,2,3,4,5,5];
Math.max.apply(" ",arr_Max);
console.log(typeof(Math));


/************************* Seperate Line *************************/

/*
 *bubble sorting
 */

 //ascending
var arr1=[2,3,45,64,321,3,21,321,31,999];

function demo5(arr)
{   //for n th element only need to compare n-1 th
    for(var m=0;m<arr.length-1;m++)
    {   //compare the current element to the element behind it
        for(var n=0;n<arr.length-m-1;n++)
        {   //place the largest number to the end after 1st round
            if(arr[n]>arr[n+1])
            {
                let temp=arr[n];
                arr[n]=arr[n+1];
                arr[n+1]=temp;
            }
        }
    }
    return arr;
}
console.log(arr1);
console.log(demo5(arr1))

//descending
var arr1=demo5(arr1);
function demo6(arr)
{
    for (var m=0;m<arr.length-1;m++)
    {
        for(var n=0;n<arr.length-m-1;n++)
        {   //place the smallest number to the end after the 1st round
            if(arr[n]<arr[n+1])
               {
                let temp=arr[n];
                 arr[n]=arr[n+1];
                 arr[n+1]=temp;
               } 
        }
    }
    return arr;
}
console.log(arr1);
console.log(demo6(arr1));

/************************* Seperate Line *************************/

/*
 *quick sorting
 */

var arr1=[1,4,765,86,53,87,53,32,6,64,2,3,767,34,0,4,35,6];
function demo7(arr)
{
    if(arr.length<=1)
    {
        return arr;
    }
    var leftArr=[];
    var rightArr=[];
    var q=arr[0];
    for(var m=1;m<arr.length;m++)
    {
        if(arr[m]>q)
        {
            rightArr.push(arr[m]);
        }
        else
        {
            leftArr.push(arr[m]);
        }
    }
    //after a round the q=arr[0] must put back mannually!!
    return [].concat(demo7(leftArr),[q],demo7(rightArr));
}
console.log([].concat(arr1));
console.log(demo7(arr1));

//demo of concat
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
//transfer string to array
console.log(([].concat(array1)+","+[].concat(array2)).split(","));
// expected output: Array ["a", "b", "c", "d", "e", "f"]

/************************* Seperate Line *************************/

/*
 *swap without temp variable
 */
var a=[1,2]; 
function demo8(a) 
{
    a[1]=a[1]-a[0]
    a[0]=a[0]+a[1]
    a[1]=a[0]-a[1]; 
    return a;  
}  
console.log(a);
console.log(demo8(a)); 

/************************* Seperate Line *************************/

/*
 *demo of math
 */
var arr1 = [2,44,3,-12,43,5,8,67,54,32,-211];  
var max = Math.max.apply(Math,arr1); 
var max2=Math.max(...arr1); 
var min = Math.min.apply(Math,arr1);  
var min2=Math.min(...arr1);
console.log(max-min);
console.log(max2-min2);

/************************* Seperate Line *************************/

/*
 *generate random string with n length
 */
function demo9(n)
{  
    //soruce
    var str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz9876543210";

    var xxx=str1.length;
    console.log(xxx); //return 62
    console.log(str1.charAt(2));//return C

    //target
    var str2 = "";  
    for (var m = 0; m < n ; m ++)
        {  
            str2 += str1.charAt(Math.floor(Math.random()*str1.length));  
        }  
    return str2;  
}  
console.log(demo9(10)); 

//demo for details
//expect a number x which 0<=x<1;
console.log(Math.random()); 
console.log(Math.floor(0.1));
console.log(Math.floor(1.1));
console.log(Math.floor(2.1));

//for integer number
function demo10(max) 
{
  
  return Math.floor(Math.random()*Math.floor(max));
}
console.log(demo10(3));
// expected output: 0 1 2

function demo10_A(min, max) 
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
  //The maximum is exclusive and the minimum is inclusive
}
console.log(demo10_A(0.1, 100.8));

/************************* Seperate Line *************************/

/*
 *search all tags
 */
 
function demo11(node,classname) 
    {   
       if(node.getElementsByClassName) 
       { 
            //if class name exists
            return node.getElementsByClassName(classname);  
       } 
       else 
       {    //if not check the tagname
            var tag_name = node.getElementsByTagName(node),  
            //global variable
            defualt = []; 
            console.log(typeof(defualt));
            for (var m = 0; m < tag_name.length; m++) 
                {   //list all tag names 
                    if (tag_name[m].className.indexOf(classname) != -1) 
                    {  
                    //find corresponding class name in all tags  
                        defualt[defualt.length] = tag_name[m];  
                    }  
                }  
            return defualt;  
       }  
    }  
//normal get tat
var text = document.getElementById('text'); 
//use function demo11 to get function 
var cs = demo11(text,'cs');  
console.log(cs);//[div.cs, p.cs]    

