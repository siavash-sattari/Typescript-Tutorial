"use strict";
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTION"] = 3] = "DIRECTION";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
let docOne = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: { name: "john" },
};
let docTwo = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: "name of the wind" },
};
console.log(docOne, docTwo);
// { uid : 1 , resourceType : 0 , data : {name: "john"} }
// { uid : 1 , resourceType : 0 , data : {title:"name of the wind"} }
