const getAverage = arr => {
    var sum = 0; 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length - 1; 
}


//python 

export var pythonPay = [84000, 86000, 85000, 87000, 90000, 91000]
export var pythonPop = [10800, 11800, 12500, 13100, 13200, 14100]

export var pythonPayA = getAverage(pythonPay); 
export var pythonPopA = getAverage(pythonPop); 

export var pythonsummary = "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse."; 
export var pythoninfo = ["This language mainly focuses on jobs like Data Science and AI. While they do make a lot of money, the python developers, software developers don't.", "The demand for Python jobs such as Data Science and Machine Learning, has rose ever since the beginning of the last decade."]; 

//java 

export var javaPay = [100000, 101000, 112000, 121000, 120000, 107000]
export var javaPop = [29200, 28100, 26700, 29700, 28600, 27100]

export var javaPayA = getAverage(javaPay); 
export var javaPopA = getAverage(javaPop); 

export var javasummary = "Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications. The Java syntax is similar to C++, but is strictly an object-oriented programming language."; 
export var javainfo = ["Over the last decade, the pay for Java Developers peaked midway through the decade. Ever since 2018, the average pay has fallen into 2020.", "The demand and popularity for Java has remained pretty steady throughout the decade. Companies demand for Java Developers is around the same now than how it was in 2010."]; 

//c#

export var csharpPay = [101000, 99000, 95100, 97000, 89700, 95200]
export var csharpPop = [9300, 10300, 11100, 11000, 10400, 9800]

export var csharpPayA = getAverage(csharpPay); 
export var csharpPopA = getAverage(csharpPop); 

export var csharpsummary = "C# is a modern, general-purpose, object-oriented programming language developed by Microsoft and approved by European Computer Manufacturers Association and International Standards Organization. C# was developed by Anders Hejlsberg and his team during the development of .Net Framework."; 
export var csharpinfo = ["The pay for C# developers has remained steady and constant over the decade.", "Although the demand for C# developers isn't as high as something like a Java or Python Developer, it is still one of the best technologes to use in some parts of the US."]; 

//javascript

export var javascriptPay = [68000, 67800, 70000, 85000, 82300, 87000]
export var javascriptPop = [20200, 20500, 20700, 21200, 21600, 22000]

export var javascriptPayA = getAverage(javascriptPay); 
export var javascriptPopA = getAverage(javascriptPop); 

export var javascriptsummary = "JavaScript is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles."; 
export var javascriptinfo = ["The demand for javascript developers has increased over the last decade. Mainly the demand comes from web development itself.", "The popularity and demand for javascript developers varies from React JS, Vue Js, and Angular, atleast that's the demand. This has remained the same throughout the last decade."]; 
