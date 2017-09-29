var brain = require('brain');
var net = new brain.NeuralNetwork();

/*
                The values
                
    1 is the biggest value in our app.
    
    We can provide different templates with `one`...
    For example if my channel is new the hot videos will 
    have аpproximately 100 views 30 likes and 20 shares.
    But if I have very big channel the hot video will have 200k views 100k like & 50k shares
    
    Let's say I have `very big` channel:
    {v: 1, l: 1, s: 1} will be аpproximately 200k views 100k like & 50k
    shares and { h: 1 } meaning - hot video ({ b: 1 } meaning boring video)
*/

// Train the network
net.train([
    {input: { v: 1, l: 1, s: 1 }, output: { h: 1 }},
    {input: { v: 0.9, l: 1, s: 0.79 }, output: { h: 1 }},
    {input: { v: 0.85, l: 0.89, s: 0.77 }, output: { h: 1 }},
    {input: { v: 0.8, l: 0.7, s: 0.69 }, output: { h: 1 }},
    {input: { v: 0, l: 0, s: 0 }, output: { b: 1 }},
    {input: { v: 0.2, l: 0.1, s: 0 }, output: { b: 1 }},
    {input: { v: 0.32, l: 0.3, s: 0.2}, output: { b: 1 }},
    {input: { v: 0.29, l: 0.32, s: 0.25}, output: { b: 1 }}
]);
 
// The values of our video
// YOU CAN EDIT IT TO TEST HOW ML WORKS...
var data = { v: 0.39, l: 0.32, s: 0.2555 };

// The output of the network
var output = net.run(data);

// The chances - hot or boring
var hot = Math.round(output.h * 100),
    boring = Math.round(output.b * 100);

// Logging
console.log("Chance to be hot: " + hot + "%");
console.log("Chance to be boring: " + boring + "%");
console.log("The video is " + (hot > boring ? 'hot' : 'boring'));