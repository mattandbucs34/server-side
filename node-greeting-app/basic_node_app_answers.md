1\. What is a Node module?
>According to the reading, a Node module is a function or sets of functions that can be included in an application. They can also be considered libraries.

2\. What is the main difference between `exports` and `module.exports`?
> `exports` is a reference to `module.exports` and not the actual object itself.

3\. Why is using `exports` recommended?
>`exports` is not a specific object type. It can only be used within a module if reassigned.