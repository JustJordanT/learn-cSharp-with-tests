---
sidebar_position: 3
---

# 1.2 Types And Variables

`C#` is a type-safe, object-oriented programming language that is widely used for building a range of applications, including web, mobile, desktop, and games. `C#` has a rich set of data types that you can use to store and manipulate data in your program.

In `C#`, there are two main categories of data types: value types and reference types.

## Value types include:

**Integral types**: sbyte, byte, short, ushort, int, uint, long, and ulong

**Floating-point types**: float and double

**Decimal type**: decimal

**Boolean type**: bool

**Character type**: char

**Reference types include**:

- String type: string
- Object type: object
- Dynamic type: dynamic

`C#` also has a special type called var, which allows you to declare a variable without specifying its type. The type of the variable will be inferred from the expression used to initialize it.

For example:

```csharp
int x = 10;          // x is of type int
double y = 10.5;     // y is of type double
string s = "Hello";  // s is of type string
var z = 10;          // z is of type int
```
It's important to choose the right data type for your variables, as it determines how much memory the variable will consume and how the value will be stored and manipulated in your program.

## Variables
In C#, a variable is a storage location for holding a value. A variable has a name, a type, and a value. The type of a variable determines what kind of value it can store, such as an integer, a floating-point number, or a string.

Here's an example of how to declare and use a variable in C#:

```
int age;  // Declare a variable named "age" of type int
age = 30; // Assign a value of 30 to the variable

Console.WriteLine(age); // Outputs "30"
```
In the example above, we declare a variable named age of type int, which stands for "integer." An integer is a whole number, positive or negative, without a decimal point.

We then assign a value of 30 to the age variable using the assignment operator =.

Finally, we use the Console.WriteLine() method to print the value of the age variable to the console.

You can also declare and assign a value to a variable in a single line, like this:

```
int age = 30;
```
You can also declare multiple variables of the same type in a single line, like this:

```
int num1, num2, num3;
```
Or you can declare and assign values to multiple variables of the same type in a single line, like this:

```
int num1 = 10, num2 = 20, num3 = 30;
```

It's important to choose descriptive and meaningful names for your variables to make your code easier to read and understand. In C#, variable names are case-sensitive and must begin with a letter, an underscore, or a dollar sign. They can contain letters, digits, and underscores, but they cannot contain spaces or other special characters.


Alright, now let's create a new project on our .NET solution. In the last lesson we created a folder where we will be storing all of our test projects.

```bash
# Create Project
dotnet new xunit -n InnovateX.Test.Types

#Add project to solution folder
dotnet sln InnovateX.sln add InnovateX.Test.Types --solution-folder InnovateX.Tests
```
We can see that we have all of our files in order.
![img_7.png](img_7.png)

### Calculate Function

Now let's create our first test. 

```csharp
 [Fact]
    public void AdditionTest()
    {
        // arrange
        var add = TypesVariables.Calculate.Addition(1, 2);
        
        // act
        var sum = 3;

        // assert
        Assert.Equal(sum, add);
    }
```

If we take a look at this test, we can see that we are adding two numbers together and returning the result. If we run this test we will notice that we are not getting a passing one. 

```bash
[CS0103] The name 'TypesVariables' does not exist in the current context
  ```

This is because we have not created this code as of yet! let's create this Calculate function.

```bash
#Create the new library containing our code
dotnet new classlib -o InnovateX.TypesVariables

#Let's add thjis to a folder as well
dotnet sln InnovateX.sln add InnovateX.TypesVariables --solution-folder InnovateX.Libraries
```
Now let's create a function to calculate the values.
 > Don't worry if you do not know what or how functions work, we will dive into these at a later time in detail. For now you can just follow along.

```bash
namespace InnovateX.TypesVariables;
public class Calculate
{
    public static int Addition(int num1, int num2)
    {
        return num1 + num2;
    }
}

```

One more thing we can see if that we are getting an error on our test code.

![img_8.png](img_8.png)
![img_9.png](img_9.png)

This is the code saying that it does not know how to reach or find this Function. If we right-click on the function.

![img_10.png](img_10.png)

we can see the actions that are available to us. Let's add the following reference!

![img_11.png](img_11.png)

Now let's see what our test is showing.

Running all tests.

![img_12.png](img_12.png)

![img_13.png](img_13.png)

Huzzah! 🎉 We have passed all tests.


I hope this gives you a good introduction to `C#` data types.




