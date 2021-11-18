"use strict";
// Tuples
let arr1 = ["john", 30, true];
arr1[0] = false;
arr1[1] = "david";
arr1 = [40, false, "scott"];
let arr2 = ["john", 25, true];
// arr2[0]=1 ======> Error
arr2[0] = "mike";
arr2[1] = 30;
let arr3;
arr3 = ["pizza", 22];
// arr3 = [22 , "pizza"] ======> Error
