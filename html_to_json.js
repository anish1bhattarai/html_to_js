// JavaScript Document
function getAttr(node) {
Array.prototype.slice.call(node.attributes).forEach(function(item) {
jSon =jSon + (' ,"' + item.name + '": "' + item.value + '" , \n');
if(item.value==='body')
{
jSon += ('  , "content": "' + node.innerHTML + '"  ') ;
}
});

}

function merge(node) {
jSon += ("{");
jSon += ('tag: "' + node.tagName + '"');
getAttr(node);
var children = node.children;
var childrenCount = children.length;


jSon += (" children : [");
for (var i = 0; i < childrenCount; i++) {
var child = children[i];
if(i>0)
{
jSon+= (",");
}
merge(child);

}

jSon += ("]");
jSon += ("}");

}

var jSon = "";
var c = document.getElementsByClassName("container");
merge(c[0]);

console.log(jSon);





