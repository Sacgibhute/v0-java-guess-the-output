import type { Question } from "@/lib/types"

// Import the Java 21 questions
import { java21Questions } from "@/lib/java21-questions"

// This file would contain all 1000 questions
// Below is a sample of questions with updated structure including difficulty levels

export const allQuestions: Question[] = [
  // Data Types & Operators
  {
    id: 1,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    int i = 10;
    System.out.println(i++ + ++i);
  }
}`,
    options: [
      { id: "a", text: "21" },
      { id: "b", text: "22" },
      { id: "c", text: "20" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "b",
    explanation:
      "i++ uses the current value (10) then increments to 11. ++i increments to 12 first, then uses the value. So 10 + 12 = 22.",
    topicId: "data-types",
    topicName: "Data Types & Operators",
    difficulty: "Basic",
  },
  {
    id: 2,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    double d = 10.0 / 0;
    System.out.println(d);
  }
}`,
    options: [
      { id: "a", text: "0.0" },
      { id: "b", text: "Infinity" },
      { id: "c", text: "ArithmeticException" },
      { id: "d", text: "NaN" },
    ],
    correctAnswer: "b",
    explanation: "Division of a non-zero number by zero in floating-point arithmetic results in Infinity.",
    topicId: "data-types",
    topicName: "Data Types & Operators",
    difficulty: "Basic",
  },
  {
    id: 3,
    text: "What will be the output of the following code in Java 10?",
    code: `public class Main {
  public static void main(String[] args) {
    var x = 10;
    var y = 20;
    var z = x + y;
    System.out.println(z);
  }
}`,
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "1020" },
      { id: "c", text: "Compilation error" },
      { id: "d", text: "Runtime error" },
    ],
    correctAnswer: "a",
    explanation:
      "Java 10 introduced the 'var' keyword for local variable type inference. Here x and y are inferred as int, so z = 30.",
    topicId: "data-types",
    topicName: "Data Types & Operators",
    difficulty: "Intermediate",
    javaVersion: "10+",
  },
  {
    id: 4,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    int x = 0x80000000;
    System.out.println(x);
    System.out.println(x >>> 1);
  }
}`,
    options: [
      { id: "a", text: "-2147483648, -1073741824" },
      { id: "b", text: "-2147483648, 1073741824" },
      { id: "c", text: "Compilation error" },
      { id: "d", text: "Overflow error" },
    ],
    correctAnswer: "b",
    explanation:
      "0x80000000 is the hexadecimal representation of the minimum integer value (-2147483648). The unsigned right shift (>>>) shifts zeros into the leftmost positions, resulting in 1073741824.",
    topicId: "data-types",
    topicName: "Data Types & Operators",
    difficulty: "Advanced",
  },
  {
    id: 5,
    text: "What will be the output of the following code in Java 15?",
    code: `public class Main {
  public static void main(String[] args) {
    record Point(int x, int y) {}
    
    Point p1 = new Point(1, 2);
    Point p2 = new Point(1, 2);
    
    System.out.println(p1.equals(p2));
    System.out.println(p1.x());
  }
}`,
    options: [
      { id: "a", text: "false, 1" },
      { id: "b", text: "true, 1" },
      { id: "c", text: "true, Compilation error" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "b",
    explanation:
      "Java 15 introduced Records. Records automatically implement equals(), hashCode(), and accessor methods. Two records with the same components are equal, and fields are accessed with accessor methods (p1.x()).",
    topicId: "data-types",
    topicName: "Data Types & Operators",
    difficulty: "Expert",
    javaVersion: "15+",
  },
  {
    id: 21,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    Integer i1 = 127;
    Integer i2 = 127;
    Integer i3 = 128;
    Integer i4 = 128;
    
    System.out.println(i1 == i2);
    System.out.println(i3 == i4);
  }
}`,
    options: [
      { id: "a", text: "true true" },
      { id: "b", text: "false false" },
      { id: "c", text: "true false" },
      { id: "d", text: "false true" },
    ],
    correctAnswer: "c",
    explanation:
      "Integer caches values between -128 and 127. For values in this range (i1 and i2), == compares the same cached object. For values outside this range (i3 and i4), == compares different objects.",
    topicId: "data-types",
    topicName: "Data Types & Operators",
    difficulty: "Advanced",
  },

  // Control Flow
  {
    id: 6,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    int x = 10;
    if (x > 5)
      System.out.print("A");
      System.out.print("B");
  }
}`,
    options: [
      { id: "a", text: "A" },
      { id: "b", text: "B" },
      { id: "c", text: "AB" },
      { id: "d", text: "No output" },
    ],
    correctAnswer: "c",
    explanation:
      "Without braces, only the first statement is part of the if block. 'A' is printed because x > 5, and 'B' is always printed.",
    topicId: "control-flow",
    topicName: "Control Flow",
    difficulty: "Basic",
  },
  {
    id: 7,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    int i = 0;
    while (i < 5) {
      if (i == 3)
        continue;
      System.out.print(i + " ");
      i++;
    }
  }
}`,
    options: [
      { id: "a", text: "0 1 2 3 4" },
      { id: "b", text: "0 1 2 4" },
      { id: "c", text: "0 1 2" },
      { id: "d", text: "Infinite loop" },
    ],
    correctAnswer: "d",
    explanation: "When i becomes 3, the continue statement skips the increment, causing an infinite loop.",
    topicId: "control-flow",
    topicName: "Control Flow",
    difficulty: "Intermediate",
  },
  {
    id: 8,
    text: "What will be the output of the following code in Java 13?",
    code: `public class Main {
  public static void main(String[] args) {
    String day = "MONDAY";
    String result = switch (day) {
      case "MONDAY":
        yield "Start of work week";
      case "FRIDAY":
        yield "End of work week";
      case "SATURDAY", "SUNDAY":
        yield "Weekend";
      default:
        yield "Midweek";
    };
    System.out.println(result);
  }
}`,
    options: [
      { id: "a", text: "Start of work week" },
      { id: "b", text: "End of work week" },
      { id: "c", text: "Midweek" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "a",
    explanation:
      "Java 13 introduced the 'yield' keyword for switch expressions, which returns a value from a switch case. Multiple case labels can be combined with commas.",
    topicId: "control-flow",
    topicName: "Control Flow",
    difficulty: "Advanced",
    javaVersion: "13+",
  },
  {
    id: 9,
    text: "What will be the output of the following code in Java 17?",
    code: `public class Main {
  public static void main(String[] args) {
    Object obj = "Hello";
    
    if (obj instanceof String s && s.length() > 3) {
      System.out.println(s.toUpperCase());
    }
  }
}`,
    options: [
      { id: "a", text: "Hello" },
      { id: "b", text: "HELLO" },
      { id: "c", text: "Compilation error" },
      { id: "d", text: "Runtime error" },
    ],
    correctAnswer: "b",
    explanation:
      "Java 16 enhanced pattern matching for instanceof with 'pattern variables'. If obj is a String and the length > 3, s is bound to the String value and can be used directly in the if block.",
    topicId: "control-flow",
    topicName: "Control Flow",
    difficulty: "Expert",
    javaVersion: "16+",
  },

  // Object-Oriented Programming
  {
    id: 10,
    text: "What will be the output of the following code?",
    code: `class Parent {
  void show() {
    System.out.println("Parent");
  }
}

class Child extends Parent {
  void show() {
    System.out.println("Child");
  }
}

public class Main {
  public static void main(String[] args) {
    Parent p = new Child();
    p.show();
  }
}`,
    options: [
      { id: "a", text: "Parent" },
      { id: "b", text: "Child" },
      { id: "c", text: "Compilation error" },
      { id: "d", text: "Runtime error" },
    ],
    correctAnswer: "b",
    explanation:
      "This demonstrates runtime polymorphism. The method called is determined by the actual object type (Child), not the reference type.",
    topicId: "oop",
    topicName: "Object-Oriented Programming",
    difficulty: "Basic",
  },
  {
    id: 11,
    text: "What will be the output of the following code?",
    code: `class Base {
  private void display() {
    System.out.println("Base display");
  }
  
  public void show() {
    display();
  }
}

class Derived extends Base {
  public void display() {
    System.out.println("Derived display");
  }
}

public class Main {
  public static void main(String[] args) {
    Base obj = new Derived();
    obj.show();
  }
}`,
    options: [
      { id: "a", text: "Base display" },
      { id: "b", text: "Derived display" },
      { id: "c", text: "Compilation error" },
      { id: "d", text: "Runtime error" },
    ],
    correctAnswer: "a",
    explanation:
      "Private methods are not overridden. The display() method in Base is private, so it's not visible to Derived. When show() is called, it invokes Base's display() method.",
    topicId: "oop",
    topicName: "Object-Oriented Programming",
    difficulty: "Intermediate",
  },
  {
    id: 12,
    text: "What will be the output of the following code in Java 14?",
    code: `public class Main {
  public static void main(String[] args) {
    sealed class Shape permits Circle, Square {
      public void draw() {
        System.out.println("Drawing a shape");
      }
    }
    
    final class Circle extends Shape {
      @Override
      public void draw() {
        System.out.println("Drawing a circle");
      }
    }
    
    non-sealed class Square extends Shape {
      @Override
      public void draw() {
        System.out.println("Drawing a square");
      }
    }
    
    Shape s = new Circle();
    s.draw();
  }
}`,
    options: [
      { id: "a", text: "Drawing a shape" },
      { id: "b", text: "Drawing a circle" },
      { id: "c", text: "Compilation error" },
      { id: "d", text: "Runtime error" },
    ],
    correctAnswer: "b",
    explanation:
      "Java 15 introduced sealed classes, which restrict which classes can inherit from them. Despite the sealed nature, polymorphism still works as expected, so Circle's draw() method is called.",
    topicId: "oop",
    topicName: "Object-Oriented Programming",
    difficulty: "Expert",
    javaVersion: "15+",
  },
  {
    id: 22,
    text: "What will be the output of the following code?",
    code: `public class Main {
  static class Outer {
    private int x = 10;
    
    class Inner {
      private int x = 20;
      
      void method(int x) {
        System.out.println(x);
        System.out.println(this.x);
        System.out.println(Outer.this.x);
      }
    }
  }
  
  public static void main(String[] args) {
    Outer.Inner inner = new Outer().new Inner();
    inner.method(30);
  }
}`,
    options: [
      { id: "a", text: "10 20 30" },
      { id: "b", text: "30 20 10" },
      { id: "c", text: "30 10 20" },
      { id: "d", text: "10 30 20" },
    ],
    correctAnswer: "b",
    explanation:
      "The method parameter x is 30, this.x refers to Inner's x (20), and Outer.this.x refers to Outer's x (10).",
    topicId: "inner-classes",
    topicName: "Inner & Anonymous Classes",
    difficulty: "Advanced",
  },

  // Collections Framework
  {
    id: 13,
    text: "What will be the output of the following code?",
    code: `import java.util.*;

public class Main {
  public static void main(String[] args) {
    List<String> list = new ArrayList<>();
    list.add("A");
    list.add("B");
    list.add("A");
    Set<String> set = new HashSet<>(list);
    System.out.println(set.size());
  }
}`,
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "2" },
      { id: "c", text: "1" },
      { id: "d", text: "0" },
    ],
    correctAnswer: "b",
    explanation:
      "HashSet doesn't allow duplicates, so only unique elements 'A' and 'B' are stored, resulting in size 2.",
    topicId: "collections",
    topicName: "Collections Framework",
    difficulty: "Basic",
  },
  {
    id: 14,
    text: "What will be the output of the following code in Java 10?",
    code: `import java.util.*;

public class Main {
  public static void main(String[] args) {
    var map = Map.of(
      "A", 1,
      "B", 2,
      "C", 3
    );
    map.put("D", 4);
    System.out.println(map.get("D"));
  }
}`,
    options: [
      { id: "a", text: "4" },
      { id: "b", text: "null" },
      { id: "c", text: "UnsupportedOperationException" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "c",
    explanation:
      "Map.of() creates an immutable map. Attempting to modify it with put() throws an UnsupportedOperationException.",
    topicId: "collections",
    topicName: "Collections Framework",
    difficulty: "Intermediate",
    javaVersion: "9+",
  },
  {
    id: 15,
    text: "What will be the output of the following code in Java 11?",
    code: `import java.util.*;

public class Main {
  public static void main(String[] args) {
    List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));
    List<String> copy = List.copyOf(list);
    list.add("D");
    System.out.println(copy.size() + " " + list.size());
  }
}`,
    options: [
      { id: "a", text: "3 4" },
      { id: "b", text: "4 4" },
      { id: "c", text: "3 3" },
      { id: "d", text: "UnsupportedOperationException" },
    ],
    correctAnswer: "a",
    explanation:
      "List.copyOf() creates an immutable copy of the list at the point of creation. Changes to the original list don't affect the copy.",
    topicId: "collections",
    topicName: "Collections Framework",
    difficulty: "Advanced",
    javaVersion: "10+",
  },

  // Streams & Lambdas
  {
    id: 16,
    text: "What will be the output of the following code in Java 8?",
    code: `import java.util.*;
import java.util.stream.*;

public class Main {
  public static void main(String[] args) {
    List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
    int sum = list.stream()
                 .filter(n -> n % 2 == 1)
                 .map(n -> n * n)
                 .reduce(0, Integer::sum);
    System.out.println(sum);
  }
}`,
    options: [
      { id: "a", text: "15" },
      { id: "b", text: "35" },
      { id: "c", text: "9" },
      { id: "d", text: "25" },
    ],
    correctAnswer: "b",
    explanation: "The stream filters odd numbers (1,3,5), squares them (1,9,25), and sums them (1+9+25=35).",
    topicId: "streams-lambdas",
    topicName: "Streams & Lambdas",
    difficulty: "Intermediate",
    javaVersion: "8+",
  },
  {
    id: 17,
    text: "What will be the output of the following code in Java 16?",
    code: `import java.util.stream.*;

public class Main {
  public static void main(String[] args) {
    String result = Stream.of("a", "b", "c")
                         .map(String::toUpperCase)
                         .collect(Collectors.joining());
    System.out.println(result);
  }
}`,
    options: [
      { id: "a", text: "abc" },
      { id: "b", text: "ABC" },
      { id: "c", text: "A,B,C" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "b",
    explanation:
      "The stream maps each element to uppercase with String::toUpperCase, then joins them with Collectors.joining() into a single string 'ABC'.",
    topicId: "streams-lambdas",
    topicName: "Streams & Lambdas",
    difficulty: "Basic",
    javaVersion: "8+",
  },
  {
    id: 18,
    text: "What will be the output of the following code in Java 16?",
    code: `import java.util.stream.*;

record Person(String name, int age) {}

public class Main {
  public static void main(String[] args) {
    var people = Stream.of(
      new Person("Alice", 25),
      new Person("Bob", 30),
      new Person("Charlie", 35)
    );
    
    var result = people.collect(Collectors.teeing(
      Collectors.averagingInt(Person::age),
      Collectors.mapping(Person::name, Collectors.joining(", ")),
      (avg, names) -> "Average age: " + avg + ", Names: " + names
    ));
    
    System.out.println(result);
  }
}`,
    options: [
      { id: "a", text: "Average age: 30.0, Names: Alice, Bob, Charlie" },
      { id: "b", text: "Average age: 30, Names: Alice, Bob, Charlie" },
      { id: "c", text: "Compilation error" },
      { id: "d", text: "Runtime error" },
    ],
    correctAnswer: "a",
    explanation:
      "Java 12 introduced Collectors.teeing() which forwards input to two collectors and combines their results. Here it calculates the average age (30.0) and joins the names.",
    topicId: "streams-lambdas",
    topicName: "Streams & Lambdas",
    difficulty: "Expert",
    javaVersion: "12+",
  },
  {
    id: 24,
    text: "What will be the output of the following code?",
    code: `import java.util.*;
import java.util.stream.*;

public class Main {
  public static void main(String[] args) {
    List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
    
    Optional<Integer> result = list.stream()
      .filter(n -> n % 2 == 0)
      .reduce((a, b) -> a + b);
      
    System.out.println(result.orElse(0));
  }
}`,
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "6" },
      { id: "c", text: "15" },
      { id: "d", text: "NoSuchElementException" },
    ],
    correctAnswer: "b",
    explanation:
      "The stream filters even numbers (2, 4), then reduces them by adding (2+4=6). The result is present, so orElse(0) returns 6.",
    topicId: "streams-lambdas",
    topicName: "Streams & Lambdas",
    difficulty: "Advanced",
  },

  // Multithreading
  {
    id: 19,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    Object lock = new Object();
    Thread t1 = new Thread(() -> {
      synchronized(lock) {
        System.out.print("T1 ");
        try {
          lock.wait();
        } catch (InterruptedException e) {}
        System.out.print("T1 again ");
      }
    });
    
    Thread t2 = new Thread(() -> {
      try {
        Thread.sleep(100); // Ensure T1 runs first
      } catch (InterruptedException e) {}
      
      synchronized(lock) {
        System.out.print("T2 ");
        lock.notify();
        System.out.print("T2 again ");
      }
    });
    
    t1.start();
    t2.start();
  }
}`,
    options: [
      { id: "a", text: "T1 T2 T2 again T1 again" },
      { id: "b", text: "T1 T2 T1 again T2 again" },
      { id: "c", text: "T2 T1 T2 again T1 again" },
      { id: "d", text: "T1 T2 T1 again" },
    ],
    correctAnswer: "a",
    explanation:
      "T1 acquires the lock and prints 'T1', then waits (releasing the lock). T2 acquires the lock, prints 'T2', notifies T1, and prints 'T2 again' before releasing the lock. T1 then reacquires the lock and prints 'T1 again'.",
    topicId: "multithreading",
    topicName: "Multithreading",
    difficulty: "Expert",
  },
  {
    id: 20,
    text: "What will be the output of the following code in Java 19?",
    code: `import java.util.concurrent.*;

public class Main {
  public static void main(String[] args) {
    Callable<String> task = () -> {
      Thread.sleep(100);
      return "Result";
    };
    
    try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
      Future<String> future = executor.submit(task);
      System.out.println(future.get());
    } catch (Exception e) {
      System.out.println("Error");
    }
  }
}`,
    options: [
      { id: "a", text: "Result" },
      { id: "b", text: "Error" },
      { id: "c", text: "Compilation error" },
      { id: "d", text: "No output" },
    ],
    correctAnswer: "a",
    explanation:
      "Java 19 introduced Virtual Threads as a preview feature. The code creates a virtual thread executor, submits a task that returns 'Result', and prints that result.",
    topicId: "multithreading",
    topicName: "Multithreading",
    difficulty: "Expert",
    javaVersion: "19+",
  },
  {
    id: 23,
    text: "What will be the output of the following code?",
    code: `import java.util.concurrent.locks.*;

public class Main {
  public static void main(String[] args) {
    ReentrantLock lock = new ReentrantLock();
    
    try {
      System.out.print(lock.isLocked() + " ");
      lock.lock();
      System.out.print(lock.isLocked() + " ");
      lock.lock();
      System.out.print(lock.getHoldCount() + " ");
    } finally {
      lock.unlock();
      System.out.print(lock.isLocked() + " ");
      lock.unlock();
      System.out.print(lock.isLocked());
    }
  }
}`,
    options: [
      { id: "a", text: "false true 2 true false" },
      { id: "b", text: "false true 2 false false" },
      { id: "c", text: "false true 1 true false" },
      { id: "d", text: "false false 2 false false" },
    ],
    correctAnswer: "a",
    explanation:
      "ReentrantLock allows the same thread to acquire the lock multiple times. Initially the lock is not held (false), after lock() it's held (true), after another lock() the hold count is 2, after one unlock() it's still locked (true), and after the second unlock() it's released (false).",
    topicId: "multithreading",
    topicName: "Multithreading",
    difficulty: "Advanced",
  },

  // Exception Handling
  {
    id: 25,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    try {
      throw new Exception("Outer");
    } catch (Exception e) {
      try {
        throw new Exception("Inner");
      } catch (Exception ex) {
        System.out.print(ex.getMessage() + " ");
      }
      System.out.print(e.getMessage());
    }
  }
}`,
    options: [
      { id: "a", text: "Outer Inner" },
      { id: "b", text: "Inner Outer" },
      { id: "c", text: "Inner" },
      { id: "d", text: "Outer" },
    ],
    correctAnswer: "b",
    explanation:
      "The inner exception is caught and its message 'Inner' is printed first. Then execution continues in the outer catch block, printing the outer exception message 'Outer'.",
    topicId: "exceptions",
    topicName: "Exception Handling",
    difficulty: "Advanced",
  },

  // NEW QUESTIONS START HERE

  // Data Types & Operators - New Questions
  {
    id: 101,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    char c1 = 'a';
    char c2 = 97;
    System.out.println(c1 + " " + c2);
    System.out.println(c1 == c2);
  }
}`,
    options: [
      { id: "a", text: "a a\ntrue" },
      { id: "b", text: "a 97\nfalse" },
      { id: "c", text: "97 97\ntrue" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "a",
    explanation:
      "In Java, char can be initialized with either a character literal or its Unicode value. 'a' has the Unicode value 97, so both c1 and c2 represent the same character 'a'. Therefore, they are equal.",
    topicId: "data-types",
    topicName: "Data Types & Operators",
    difficulty: "Basic",
  },
  {
    id: 102,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    int a = 5;
    int b = 2;
    double result = a / b;
    System.out.println(result);
  }
}`,
    options: [
      { id: "a", text: "2.5" },
      { id: "b", text: "2.0" },
      { id: "c", text: "2" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "b",
    explanation:
      "When dividing two integers in Java, the result is an integer (integer division). So a / b gives 2. This integer is then widened to a double (2.0) when assigned to the result variable.",
    topicId: "data-types",
    topicName: "Data Types & Operators",
    difficulty: "Basic",
  },
  {
    id: 103,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    byte b1 = 10;
    byte b2 = 20;
    byte b3 = (byte)(b1 + b2);
    System.out.println(b3);
    
    byte b4 = 127;
    byte b5 = 1;
    byte b6 = (byte)(b4 + b5);
    System.out.println(b6);
  }
}`,
    options: [
      { id: "a", text: "30\n128" },
      { id: "b", text: "30\n-128" },
      { id: "c", text: "Compilation error" },
      { id: "d", text: "30\nArithmeticException" },
    ],
    correctAnswer: "b",
    explanation:
      "In the first case, b1 + b2 = 30, which fits in a byte. In the second case, 127 + 1 = 128, which exceeds the maximum value for a byte (127). When cast to byte, it wraps around to -128 due to two's complement representation.",
    topicId: "data-types",
    topicName: "Data Types & Operators",
    difficulty: "Intermediate",
  },
  {
    id: 104,
    text: "What will be the output of the following code in Java 14?",
    code: `public class Main {
  public static void main(String[] args) {
    int num = 12345;
    System.out.println(
      Integer.toString(num, 2) + "\n" +
      Integer.toString(num, 8) + "\n" +
      Integer.toString(num, 16) + "\n" +
      Integer.toString(num, 36)
    );
  }
}`,
    options: [
      { id: "a", text: "11000000111001\n30071\n3039\n9ix" },
      { id: "b", text: "11000000111001\n30071\n3039\nIllegalArgumentException" },
      { id: "c", text: "Compilation error" },
      { id: "d", text: "11000000111001\n30071\n3039\n9IX" },
    ],
    correctAnswer: "a",
    explanation:
      "Integer.toString(int, radix) converts the number to a string in the specified base. The output shows the binary (base 2), octal (base 8), hexadecimal (base 16), and base 36 representations of 12345. Base 36 uses digits 0-9 and letters a-z.",
    topicId: "data-types",
    topicName: "Data Types & Operators",
    difficulty: "Intermediate",
    javaVersion: "8+",
  },
  {
    id: 105,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    float f = 0.1f;
    double d = 0.1;
    System.out.println(f);
    System.out.println(d);
    System.out.println(f == d);
  }
}`,
    options: [
      { id: "a", text: "0.1\n0.1\ntrue" },
      { id: "b", text: "0.1\n0.1\nfalse" },
      { id: "c", text: "0.10000000149011612\n0.1\nfalse" },
      { id: "d", text: "0.1\n0.10000000000000001\nfalse" },
    ],
    correctAnswer: "b",
    explanation:
      "Floating-point numbers (float and double) can't exactly represent all decimal values due to binary representation limitations. While they print as 0.1, their actual binary representations differ slightly. Therefore, comparing them with == returns false.",
    topicId: "data-types",
    topicName: "Data Types & Operators",
    difficulty: "Advanced",
  },
  {
    id: 106,
    text: "What will be the output of the following code in Java 15?",
    code: `public class Main {
  public static void main(String[] args) {
    int million = 1_000_000;
    int billion = 1_000_000_000;
    long trillion = 1_000_000_000_000L;
    
    System.out.println(million);
    System.out.println(billion);
    System.out.println(trillion);
  }
}`,
    options: [
      { id: "a", text: "1000000\n1000000000\n1000000000000" },
      { id: "b", text: "1_000_000\n1_000_000_000\n1_000_000_000_000" },
      { id: "c", text: "Compilation error" },
      { id: "d", text: "1,000,000\n1,000,000,000\n1,000,000,000,000" },
    ],
    correctAnswer: "a",
    explanation:
      "Java 7 introduced underscores in numeric literals to improve readability. These underscores are ignored by the compiler and don't appear in the output. The values are printed without the underscores.",
    topicId: "data-types",
    topicName: "Data Types & Operators",
    difficulty: "Basic",
    javaVersion: "7+",
  },
  {
    id: 107,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    String s1 = "Hello";
    String s2 = "Hello";
    String s3 = new String("Hello");
    
    System.out.println(s1 == s2);
    System.out.println(s1 == s3);
    System.out.println(s1.equals(s3));
  }
}`,
    options: [
      { id: "a", text: "true\ntrue\ntrue" },
      { id: "b", text: "true\nfalse\ntrue" },
      { id: "c", text: "false\nfalse\ntrue" },
      { id: "d", text: "true\nfalse\nfalse" },
    ],
    correctAnswer: "b",
    explanation:
      "String literals like s1 and s2 are stored in the string pool, so they reference the same object (true). s3 is created with 'new' so it's a different object in memory (false). String.equals() compares content, not references, so s1.equals(s3) is true.",
    topicId: "data-types",
    topicName: "Data Types & Operators",
    difficulty: "Basic",
  },
  {
    id: 108,
    text: "What will be the output of the following code in Java 17?",
    code: `public class Main {
  public static void main(String[] args) {
    String text = """
                  Hello,
                  World!
                  """;
    System.out.println(text);
    System.out.println(text.lines().count());
  }
}`,
    options: [
      { id: "a", text: "Hello,\nWorld!\n\n2" },
      { id: "b", text: "Hello,\nWorld!\n\n3" },
      { id: "c", text: "Hello,\nWorld!\n\n1" },
      { id: "d", text: "Hello,\nWorld!\n2" },
    ],
    correctAnswer: "d",
    explanation:
      "Java 15 introduced text blocks (multi-line strings) with triple quotes. The indentation is removed based on the closing quotes. The text contains two lines, so text.lines().count() returns 2.",
    topicId: "data-types",
    topicName: "Data Types & Operators",
    difficulty: "Intermediate",
    javaVersion: "15+",
  },

  // Control Flow - New Questions
  {
    id: 109,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
          break;
        }
        System.out.print(i + "" + j + " ");
      }
    }
  }
}`,
    options: [
      { id: "a", text: "00 01 02 10 11 12 20 21 22" },
      { id: "b", text: "00 01 02 10 20 21 22" },
      { id: "c", text: "00 01 02 10 11 12" },
      { id: "d", text: "00 01 02 10 20 21 22" },
    ],
    correctAnswer: "b",
    explanation:
      "The break statement only breaks out of the innermost loop. When i=1 and j=1, the inner loop is exited, but the outer loop continues. So we skip printing '11' and '12', but continue with i=2.",
    topicId: "control-flow",
    topicName: "Control Flow",
    difficulty: "Basic",
  },
  {
    id: 110,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    outer:
    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
          break outer;
        }
        System.out.print(i + "" + j + " ");
      }
    }
  }
}`,
    options: [
      { id: "a", text: "00 01 02 10" },
      { id: "b", text: "00 01 02 10 11" },
      { id: "c", text: "00 01 02 10" },
      { id: "d", text: "00 01 02" },
    ],
    correctAnswer: "c",
    explanation:
      "Using a labeled break (break outer) breaks out of the labeled loop, which in this case is the outer loop. When i=1 and j=1, both loops are exited, so we only print '00', '01', '02', and '10'.",
    topicId: "control-flow",
    topicName: "Control Flow",
    difficulty: "Intermediate",
  },
  {
    id: 111,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    int x = 10;
    
    switch (x) {
      case 10:
        System.out.print("Ten ");
      case 20:
        System.out.print("Twenty ");
        break;
      case 30:
        System.out.print("Thirty ");
        break;
      default:
        System.out.print("Default ");
    }
  }
}`,
    options: [
      { id: "a", text: "Ten" },
      { id: "b", text: "Ten Twenty" },
      { id: "c", text: "Twenty" },
      { id: "d", text: "Default" },
    ],
    correctAnswer: "b",
    explanation:
      "In a switch statement without break, execution falls through to the next case. Since x=10 matches the first case, 'Ten ' is printed, then execution continues to the next case, printing 'Twenty ' before encountering a break.",
    topicId: "control-flow",
    topicName: "Control Flow",
    difficulty: "Basic",
  },
  {
    id: 112,
    text: "What will be the output of the following code in Java 14?",
    code: `public class Main {
  public static void main(String[] args) {
    int day = 3;
    
    String result = switch (day) {
      case 1, 2, 3, 4, 5 -> "Weekday";
      case 6, 7 -> "Weekend";
      default -> "Invalid day";
    };
    
    System.out.println(result);
  }
}`,
    options: [
      { id: "a", text: "Weekday" },
      { id: "b", text: "Weekend" },
      { id: "c", text: "Invalid day" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "a",
    explanation:
      "Java 14 introduced switch expressions with the arrow syntax. Multiple case values can be combined with commas. Since day=3 matches the first case, the result is 'Weekday'.",
    topicId: "control-flow",
    topicName: "Control Flow",
    difficulty: "Intermediate",
    javaVersion: "14+",
  },
  {
    id: 113,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    int count = 0;
    
    do {
      System.out.print(count + " ");
      count++;
    } while (count < 0);
    
    System.out.println("\\nFinal count: " + count);
  }
}`,
    options: [
      { id: "a", text: "Final count: 0" },
      { id: "b", text: "0 \nFinal count: 1" },
      { id: "c", text: "No output" },
      { id: "d", text: "Infinite loop" },
    ],
    correctAnswer: "b",
    explanation:
      "A do-while loop executes the body at least once before checking the condition. So even though count < 0 is false from the start (count is 0), the loop body executes once, printing '0 ' and incrementing count to 1.",
    topicId: "control-flow",
    topicName: "Control Flow",
    difficulty: "Basic",
  },
  {
    id: 114,
    text: "What will be the output of the following code in Java 17?",
    code: `public class Main {
  public static void main(String[] args) {
    Object obj = "Hello";
    
    if (obj instanceof String s && s.length() > 2) {
      System.out.println(s.substring(0, 2));
    } else if (obj instanceof Integer i) {
      System.out.println(i * 2);
    } else {
      System.out.println("Unknown type");
    }
  }
}`,
    options: [
      { id: "a", text: "He" },
      { id: "b", text: "Hello" },
      { id: "c", text: "Unknown type" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "a",
    explanation:
      "Java 16 introduced pattern matching for instanceof with pattern variables. Since obj is a String and its length is greater than 2, the first condition is true. The variable s is bound to the String value, and s.substring(0, 2) returns 'He'.",
    topicId: "control-flow",
    topicName: "Control Flow",
    difficulty: "Advanced",
    javaVersion: "16+",
  },
  {
    id: 115,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    int sum = 0;
    
    for (int i = 0; i < 5; i++) {
      if (i % 2 == 0) continue;
      sum += i;
    }
    
    System.out.println(sum);
  }
}`,
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "6" },
      { id: "c", text: "4" },
      { id: "d", text: "0" },
    ],
    correctAnswer: "c",
    explanation:
      "The continue statement skips the rest of the current iteration. When i is even (0, 2, 4), the loop skips adding to sum. Only odd values (1, 3) are added, so sum = 1 + 3 = 4.",
    topicId: "control-flow",
    topicName: "Control Flow",
    difficulty: "Basic",
  },
  {
    id: 116,
    text: "What will be the output of the following code in Java 17?",
    code: `public class Main {
  public static void main(String[] args) {
    String day = "TUESDAY";
    
    int numLetters = switch (day) {
      case "MONDAY", "FRIDAY", "SUNDAY" -> 6;
      case "TUESDAY" -> 7;
      case "THURSDAY", "SATURDAY" -> 8;
      case "WEDNESDAY" -> 9;
      default -> throw new IllegalArgumentException("Invalid day: " + day);
    };
    
    System.out.println(numLetters);
  }
}`,
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "7" },
      { id: "c", text: "8" },
      { id: "d", text: "IllegalArgumentException" },
    ],
    correctAnswer: "b",
    explanation:
      "Java 17 fully supported switch expressions. The switch matches 'TUESDAY' and returns 7, which is assigned to numLetters and then printed.",
    topicId: "control-flow",
    topicName: "Control Flow",
    difficulty: "Intermediate",
    javaVersion: "17+",
  },

  // Object-Oriented Programming - New Questions
  {
    id: 117,
    text: "What will be the output of the following code?",
    code: `class Animal {
  void makeSound() {
    System.out.println("Animal sound");
  }
}

class Dog extends Animal {
  void makeSound() {
    System.out.println("Bark");
  }
  
  void playFetch() {
    System.out.println("Playing fetch");
  }
}

public class Main {
  public static void main(String[] args) {
    Animal animal = new Dog();
    animal.makeSound();
    ((Dog) animal).playFetch();
  }
}`,
    options: [
      { id: "a", text: "Animal sound\nPlaying fetch" },
      { id: "b", text: "Bark\nPlaying fetch" },
      { id: "c", text: "Bark\nClassCastException" },
      { id: "d", text: "Animal sound\nClassCastException" },
    ],
    correctAnswer: "b",
    explanation:
      "The variable animal has a compile-time type of Animal but a runtime type of Dog. When animal.makeSound() is called, the Dog's implementation is used due to polymorphism. The cast ((Dog) animal) is valid because animal actually refers to a Dog object, so playFetch() can be called.",
    topicId: "oop",
    topicName: "Object-Oriented Programming",
    difficulty: "Basic",
  },
  {
    id: 118,
    text: "What will be the output of the following code?",
    code: `class Parent {
  Parent() {
    System.out.print("Parent ");
  }
}

class Child extends Parent {
  Child() {
    System.out.print("Child ");
  }
}

public class Main {
  public static void main(String[] args) {
    Child child = new Child();
  }
}`,
    options: [
      { id: "a", text: "Parent" },
      { id: "b", text: "Child" },
      { id: "c", text: "Parent Child" },
      { id: "d", text: "Child Parent" },
    ],
    correctAnswer: "c",
    explanation:
      "When a Child object is created, the Parent constructor is called first (implicitly via super()), followed by the Child constructor. So 'Parent ' is printed first, then 'Child '.",
    topicId: "oop",
    topicName: "Object-Oriented Programming",
    difficulty: "Basic",
  },
  {
    id: 119,
    text: "What will be the output of the following code?",
    code: `class Base {
  int x = 10;
  
  Base() {
    initialize();
  }
  
  void initialize() {
    System.out.println("Base initialize: x = " + x);
  }
}

class Derived extends Base {
  int y = 20;
  
  Derived() {
    System.out.println("Derived constructor: y = " + y);
  }
  
  void initialize() {
    System.out.println("Derived initialize: y = " + y);
  }
}

public class Main {
  public static void main(String[] args) {
    new Derived();
  }
}`,
    options: [
      { id: "a", text: "Base initialize: x = 10\nDerived constructor: y = 20" },
      { id: "b", text: "Derived initialize: y = 20\nDerived constructor: y = 20" },
      { id: "c", text: "Derived initialize: y = 0\nDerived constructor: y = 20" },
      { id: "d", text: "Base initialize: x = 10\nDerived initialize: y = 0\nDerived constructor: y = 20" },
    ],
    correctAnswer: "c",
    explanation:
      "When a Derived object is created, the Base constructor is called first. It calls initialize(), which is overridden in Derived. At this point, Derived's fields (y) haven't been initialized yet, so y is 0. After the Base constructor completes, y is initialized to 20, and then the Derived constructor runs.",
    topicId: "oop",
    topicName: "Object-Oriented Programming",
    difficulty: "Advanced",
  },
  {
    id: 120,
    text: "What will be the output of the following code?",
    code: `class A {
  static {
    System.out.print("1 ");
  }
  
  {
    System.out.print("2 ");
  }
  
  A() {
    System.out.print("3 ");
  }
}

class B extends A {
  static {
    System.out.print("4 ");
  }
  
  {
    System.out.print("5 ");
  }
  
  B() {
    System.out.print("6 ");
  }
}

public class Main {
  public static void main(String[] args) {
    new B();
  }
}`,
    options: [
      { id: "a", text: "1 4 2 3 5 6" },
      { id: "b", text: "1 2 3 4 5 6" },
      { id: "c", text: "1 4 3 2 5 6" },
      { id: "d", text: "4 1 2 3 5 6" },
    ],
    correctAnswer: "a",
    explanation:
      "Static initialization blocks are executed when the class is loaded, in order of inheritance (A then B). Instance initialization blocks and constructors are executed when an object is created, in order: A's instance block, A's constructor, B's instance block, B's constructor.",
    topicId: "oop",
    topicName: "Object-Oriented Programming",
    difficulty: "Advanced",
  },
  {
    id: 121,
    text: "What will be the output of the following code in Java 16?",
    code: `public class Main {
  public static void main(String[] args) {
    record Point(int x, int y) {
      Point {
        if (x < 0 || y < 0) {
          throw new IllegalArgumentException("Coordinates must be non-negative");
        }
      }
      
      Point() {
        this(0, 0);
      }
    }
    
    Point p1 = new Point(5, 10);
    Point p2 = new Point();
    
    System.out.println(p1);
    System.out.println(p2);
    System.out.println(p1.equals(new Point(5, 10)));
  }
}`,
    options: [
      { id: "a", text: "Point[x=5, y=10]\nPoint[x=0, y=0]\ntrue" },
      { id: "b", text: "Point@<hashcode>\nPoint@<hashcode>\nfalse" },
      { id: "c", text: "Point[x=5, y=10]\nPoint[x=0, y=0]\nfalse" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "a",
    explanation:
      "Java 16 finalized the Record feature. Records automatically implement toString(), equals(), hashCode(), and accessors. The compact constructor validates the input. The canonical constructor is called by the no-arg constructor with default values. Two records with the same components are equal.",
    topicId: "oop",
    topicName: "Object-Oriented Programming",
    difficulty: "Expert",
    javaVersion: "16+",
  },
  {
    id: 122,
    text: "What will be the output of the following code?",
    code: `interface Drawable {
  default void draw() {
    System.out.println("Drawing a shape");
  }
}

interface Colorable {
  default void draw() {
    System.out.println("Drawing with color");
  }
}

class Shape implements Drawable, Colorable {
  @Override
  public void draw() {
    Drawable.super.draw();
  }
}

public class Main {
  public static void main(String[] args) {
    Shape shape = new Shape();
    shape.draw();
  }
}`,
    options: [
      { id: "a", text: "Drawing a shape" },
      { id: "b", text: "Drawing with color" },
      { id: "c", text: "Compilation error" },
      { id: "d", text: "Drawing a shape\nDrawing with color" },
    ],
    correctAnswer: "a",
    explanation:
      "When a class implements multiple interfaces with the same default method, it must override that method to resolve the conflict. The Shape class overrides draw() and explicitly calls Drawable.super.draw(), which prints 'Drawing a shape'.",
    topicId: "oop",
    topicName: "Object-Oriented Programming",
    difficulty: "Intermediate",
    javaVersion: "8+",
  },
  {
    id: 123,
    text: "What will be the output of the following code in Java 17?",
    code: `public class Main {
  public static void main(String[] args) {
    sealed class Vehicle permits Car, Truck, Motorcycle {
      void start() {
        System.out.println("Vehicle starting");
      }
    }
    
    final class Car extends Vehicle {
      @Override
      void start() {
        System.out.println("Car starting");
      }
    }
    
    non-sealed class Truck extends Vehicle {
      @Override
      void start() {
        System.out.println("Truck starting");
      }
    }
    
    final class Motorcycle extends Vehicle {}
    
    Vehicle v1 = new Car();
    Vehicle v2 = new Motorcycle();
    
    v1.start();
    v2.start();
  }
}`,
    options: [
      { id: "a", text: "Car starting\nVehicle starting" },
      { id: "b", text: "Vehicle starting\nVehicle starting" },
      { id: "c", text: "Car starting\nMotorcycle starting" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "a",
    explanation:
      "Java 17 finalized sealed classes, which restrict which classes can inherit from them. Car overrides the start() method, so v1.start() prints 'Car starting'. Motorcycle doesn't override start(), so it inherits Vehicle's implementation, printing 'Vehicle starting'.",
    topicId: "oop",
    topicName: "Object-Oriented Programming",
    difficulty: "Expert",
    javaVersion: "17+",
  },
  {
    id: 124,
    text: "What will be the output of the following code?",
    code: `class Singleton {
  private static Singleton instance;
  private int value;
  
  private Singleton() {
    value = 0;
  }
  
  public static Singleton getInstance() {
    if (instance == null) {
      instance = new Singleton();
    }
    return instance;
  }
  
  public int getValue() {
    return value;
  }
  
  public void setValue(int value) {
    this.value = value;
  }
}

public class Main {
  public static void main(String[] args) {
    Singleton s1 = Singleton.getInstance();
    Singleton s2 = Singleton.getInstance();
    
    s1.setValue(5);
    System.out.println(s2.getValue());
    
    s2.setValue(10);
    System.out.println(s1.getValue());
  }
}`,
    options: [
      { id: "a", text: "0\n0" },
      { id: "b", text: "5\n5" },
      { id: "c", text: "5\n10" },
      { id: "d", text: "0\n10" },
    ],
    correctAnswer: "c",
    explanation:
      "The Singleton pattern ensures only one instance of the class exists. Both s1 and s2 reference the same object. When s1 sets the value to 5, s2 sees that value. When s2 changes it to 10, s1 sees the updated value.",
    topicId: "oop",
    topicName: "Object-Oriented Programming",
    difficulty: "Intermediate",
  },

  // Collections Framework - New Questions
  {
    id: 125,
    text: "What will be the output of the following code?",
    code: `import java.util.*;

public class Main {
  public static void main(String[] args) {
    List<String> list = new ArrayList<>();
    list.add("apple");
    list.add("banana");
    list.add("cherry");
    
    Iterator<String> iterator = list.iterator();
    while (iterator.hasNext()) {
      String fruit = iterator.next();
      if (fruit.equals("banana")) {
        iterator.remove();
      }
    }
    
    System.out.println(list);
  }
}`,
    options: [
      { id: "a", text: "[apple, cherry]" },
      { id: "b", text: "[apple, banana, cherry]" },
      { id: "c", text: "[apple]" },
      { id: "d", text: "ConcurrentModificationException" },
      { id: "c", text: "[apple]" },
      { id: "d", text: "ConcurrentModificationException" },
    ],
    correctAnswer: "a",
    explanation:
      "The Iterator's remove() method safely removes the current element from the collection. After iterating through the list and removing 'banana', the list contains only 'apple' and 'cherry'.",
    topicId: "collections",
    topicName: "Collections Framework",
    difficulty: "Basic",
  },
  {
    id: 126,
    text: "What will be the output of the following code?",
    code: `import java.util.*;

public class Main {
  public static void main(String[] args) {
    Map<String, Integer> map = new HashMap<>();
    map.put("one", 1);
    map.put("two", 2);
    map.put("three", 3);
    
    System.out.println(map.get("four"));
    System.out.println(map.getOrDefault("four", 0));
    
    map.computeIfAbsent("four", k -> k.length());
    System.out.println(map.get("four"));
  }
}`,
    options: [
      { id: "a", text: "null\n0\n4" },
      { id: "b", text: "null\n0\nnull" },
      { id: "c", text: "0\n0\n4" },
      { id: "d", text: "NullPointerException" },
    ],
    correctAnswer: "a",
    explanation:
      "map.get('four') returns null since the key doesn't exist. getOrDefault() returns the specified default value (0) when the key is not found. computeIfAbsent() computes a value for the key if it's absent - in this case, the length of 'four', which is 4.",
    topicId: "collections",
    topicName: "Collections Framework",
    difficulty: "Intermediate",
    javaVersion: "8+",
  },
  {
    id: 127,
    text: "What will be the output of the following code?",
    code: `import java.util.*;

public class Main {
  public static void main(String[] args) {
    Set<Integer> set1 = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5));
    Set<Integer> set2 = new HashSet<>(Arrays.asList(4, 5, 6, 7, 8));
    
    set1.retainAll(set2);
    System.out.println(set1);
    
    set1.addAll(set2);
    System.out.println(set1);
  }
}`,
    options: [
      { id: "a", text: "[4, 5]\n[4, 5, 6, 7, 8]" },
      { id: "b", text: "[4, 5]\n[1, 2, 3, 4, 5, 6, 7, 8]" },
      { id: "c", text: "[1, 2, 3]\n[1, 2, 3, 6, 7, 8]" },
      { id: "d", text: "[4, 5]\n[4, 5, 6, 7, 8]" },
    ],
    correctAnswer: "d",
    explanation:
      "retainAll() keeps only elements that are in both sets (intersection), so set1 becomes {4, 5}. Then addAll() adds all elements from set2, but since sets don't allow duplicates, set1 becomes {4, 5, 6, 7, 8}.",
    topicId: "collections",
    topicName: "Collections Framework",
    difficulty: "Basic",
  },
  {
    id: 128,
    text: "What will be the output of the following code in Java 10?",
    code: `import java.util.*;

public class Main {
  public static void main(String[] args) {
    var list = List.of(1, 2, 3);
    var set = Set.of("a", "b", "c");
    var map = Map.of("x", 10, "y", 20);
    
    try {
      list.add(4);
    } catch (Exception e) {
      System.out.println(e.getClass().getSimpleName());
    }
    
    System.out.println(list);
    System.out.println(set);
    System.out.println(map.get("z"));
  }
}`,
    options: [
      { id: "a", text: "UnsupportedOperationException\n[1, 2, 3]\n[a, b, c]\nnull" },
      { id: "b", text: "UnsupportedOperationException\n[1, 2, 3, 4]\n[a, b, c]\nnull" },
      { id: "c", text: "UnsupportedOperationException\n[1, 2, 3]\n[a, b, c]\n0" },
      { id: "d", text: "NullPointerException\n[1, 2, 3]\n[a, b, c]\nnull" },
    ],
    correctAnswer: "a",
    explanation:
      "List.of(), Set.of(), and Map.of() create immutable collections. Attempting to modify them throws UnsupportedOperationException. The collections remain unchanged, and map.get('z') returns null since the key doesn't exist.",
    topicId: "collections",
    topicName: "Collections Framework",
    difficulty: "Intermediate",
    javaVersion: "9+",
  },
  {
    id: 129,
    text: "What will be the output of the following code?",
    code: `import java.util.*;

class Person {
  String name;
  
  Person(String name) {
    this.name = name;
  }
  
  @Override
  public String toString() {
    return name;
  }
}

public class Main {
  public static void main(String[] args) {
    Map<Person, String> map = new HashMap<>();
    
    Person p1 = new Person("John");
    Person p2 = new Person("John");
    
    map.put(p1, "Person One");
    map.put(p2, "Person Two");
    
    System.out.println(map.size());
    System.out.println(map.get(p1));
    System.out.println(map.get(p2));
  }
}`,
    options: [
      { id: "a", text: "1\nPerson Two\nPerson Two" },
      { id: "b", text: "2\nPerson One\nPerson Two" },
      { id: "c", text: "1\nPerson One\nPerson One" },
      { id: "d", text: "2\nPerson One\nPerson One" },
    ],
    correctAnswer: "b",
    explanation:
      "The Person class doesn't override equals() and hashCode(), so each Person object is considered unique even with the same name. HashMap uses these methods to determine key equality. Therefore, p1 and p2 are treated as different keys, resulting in a map size of 2.",
    topicId: "collections",
    topicName: "Collections Framework",
    difficulty: "Advanced",
  },
  {
    id: 130,
    text: "What will be the output of the following code in Java 8?",
    code: `import java.util.*;
import java.util.stream.*;

public class Main {
  public static void main(String[] args) {
    List<String> list = Arrays.asList("apple", "banana", "cherry", "date");
    
    Map<Integer, List<String>> groups = list.stream()
      .collect(Collectors.groupingBy(String::length));
    
    System.out.println(groups);
  }
}`,
    options: [
      { id: "a", text: "{5=[apple], 6=[banana, cherry], 4=[date]}" },
      { id: "b", text: "{apple=5, banana=6, cherry=6, date=4}" },
      { id: "c", text: "[apple, banana, cherry, date]" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "a",
    explanation:
      "The code groups strings by their length using Collectors.groupingBy(). Strings with length 5 (apple), length 6 (banana, cherry), and length 4 (date) are grouped into separate lists in a map where the key is the length.",
    topicId: "collections",
    topicName: "Collections Framework",
    difficulty: "Intermediate",
    javaVersion: "8+",
  },
  {
    id: 131,
    text: "What will be the output of the following code in Java 11?",
    code: `import java.util.*;

public class Main {
  public static void main(String[] args) {
    var list = new ArrayList<String>();
    list.add("one");
    list.add("two");
    list.add("three");
    
    var iterator = list.iterator();
    list.add("four");
    
    try {
      while (iterator.hasNext()) {
        System.out.print(iterator.next() + " ");
      }
    } catch (Exception e) {
      System.out.println("\\n" + e.getClass().getSimpleName());
    }
  }
}`,
    options: [
      { id: "a", text: "one two three four" },
      { id: "b", text: "one two three \nConcurrentModificationException" },
      { id: "c", text: "ConcurrentModificationException" },
      { id: "d", text: "one two three" },
    ],
    correctAnswer: "b",
    explanation:
      "When an ArrayList is modified after an iterator is created (by adding 'four'), the iterator becomes invalid. The first few elements can be accessed, but eventually a ConcurrentModificationException is thrown when the iterator detects the structural modification.",
    topicId: "collections",
    topicName: "Collections Framework",
    difficulty: "Intermediate",
  },
  {
    id: 132,
    text: "What will be the output of the following code in Java 8?",
    code: `import java.util.*;

public class Main {
  public static void main(String[] args) {
    NavigableMap<Integer, String> map = new TreeMap<>();
    map.put(1, "One");
    map.put(3, "Three");
    map.put(5, "Five");
    map.put(7, "Seven");
    
    System.out.println(map.lowerEntry(3));
    System.out.println(map.floorEntry(3));
    System.out.println(map.ceilingEntry(4));
    System.out.println(map.higherEntry(4));
  }
}`,
    options: [
      { id: "a", text: "1=One\n3=Three\n5=Five\n5=Five" },
      { id: "b", text: "null\nnull\nnull\nnull" },
      { id: "c", text: "1=One\n3=Three\n5=Five\n7=Seven" },
      { id: "d", text: "3=Three\n3=Three\n5=Five\n5=Five" },
    ],
    correctAnswer: "a",
    explanation:
      "NavigableMap provides methods to find entries relative to given keys: lowerEntry(3) finds the largest key strictly less than 3 (1), floorEntry(3) finds the largest key less than or equal to 3 (3), ceilingEntry(4) finds the smallest key greater than or equal to 4 (5), and higherEntry(4) finds the smallest key strictly greater than 4 (5).",
    topicId: "collections",
    topicName: "Collections Framework",
    difficulty: "Advanced",
    javaVersion: "6+",
  },

  // Streams & Lambdas - New Questions
  {
    id: 133,
    text: "What will be the output of the following code in Java 8?",
    code: `import java.util.*;
import java.util.stream.*;

public class Main {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
    
    int sum = numbers.stream()
                    .filter(n -> n % 2 == 0)
                    .mapToInt(n -> n * n)
                    .sum();
    
    System.out.println(sum);
  }
}`,
    options: [
      { id: "a", text: "55" },
      { id: "b", text: "20" },
      { id: "c", text: "9" },
      { id: "d", text: "30" },
    ],
    correctAnswer: "b",
    explanation:
      "The stream filters even numbers (2, 4), squares them (4, 16), and then calculates their sum (4 + 16 = 20).",
    topicId: "streams-lambdas",
    topicName: "Streams & Lambdas",
    difficulty: "Basic",
    javaVersion: "8+",
  },
  {
    id: 134,
    text: "What will be the output of the following code in Java 8?",
    code: `import java.util.*;
import java.util.stream.*;

public class Main {
  public static void main(String[] args) {
    List<String> words = Arrays.asList("apple", "banana", "cherry", "date");
    
    String result = words.stream()
                        .filter(s -> s.length() > 5)
                        .findFirst()
                        .orElse("Not found");
    
    System.out.println(result);
  }
}`,
    options: [
      { id: "a", text: "apple" },
      { id: "b", text: "banana" },
      { id: "c", text: "Not found" },
      { id: "d", text: "NoSuchElementException" },
    ],
    correctAnswer: "b",
    explanation:
      "The stream filters words with length greater than 5. 'banana' is the first such word, so findFirst() returns an Optional containing 'banana'. orElse() returns the value if present, or the default value if not.",
    topicId: "streams-lambdas",
    topicName: "Streams & Lambdas",
    difficulty: "Basic",
    javaVersion: "8+",
  },
  {
    id: 135,
    text: "What will be the output of the following code in Java 8?",
    code: `import java.util.*;
import java.util.stream.*;

public class Main {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
    
    List<Integer> result = numbers.stream()
                                .peek(n -> System.out.print(n + " "))
                                .filter(n -> n % 2 == 0)
                                .peek(n -> System.out.print("(filtered: " + n + ") "))
                                .map(n -> n * n)
                                .peek(n -> System.out.print("[mapped: " + n + "] "))
                                .collect(Collectors.toList());
    
    System.out.println("\\nResult: " + result);
  }
}`,
    options: [
      { id: "a", text: "1 2 (filtered: 2) [mapped: 4] 3 4 (filtered: 4) [mapped: 16] 5 \nResult: [4, 16]" },
      { id: "b", text: "1 2 3 4 5 (filtered: 2) (filtered: 4) [mapped: 4] [mapped: 16] \nResult: [4, 16]" },
      { id: "c", text: "(filtered: 2) [mapped: 4] (filtered: 4) [mapped: 16] \nResult: [4, 16]" },
      { id: "d", text: "1 2 3 4 5 \nResult: [4, 16]" },
    ],
    correctAnswer: "a",
    explanation:
      "peek() performs an action on each element as it flows through the stream, without modifying the stream. The first peek prints each number, filter keeps only even numbers, the second peek shows filtered values, map squares them, and the third peek shows mapped values. The final result is [4, 16].",
    topicId: "streams-lambdas",
    topicName: "Streams & Lambdas",
    difficulty: "Intermediate",
    javaVersion: "8+",
  },
  {
    id: 136,
    text: "What will be the output of the following code in Java 8?",
    code: `import java.util.*;
import java.util.stream.*;

public class Main {
  public static void main(String[] args) {
    Stream<Integer> stream = Stream.of(1, 2, 3, 4, 5);
    
    Optional<Integer> result = stream.reduce((a, b) -> a * b);
    System.out.println(result.orElse(0));
    
    try {
      long count = stream.count();
      System.out.println(count);
    } catch (Exception e) {
      System.out.println(e.getClass().getSimpleName());
    }
  }
}`,
    options: [
      { id: "a", text: "120\n5" },
      { id: "b", text: "120\n0" },
      { id: "c", text: "120\nIllegalStateException" },
      { id: "d", text: "15\nIllegalStateException" },
    ],
    correctAnswer: "c",
    explanation:
      "The reduce operation multiplies all elements together: 1*2*3*4*5 = 120. After a terminal operation like reduce(), the stream is consumed and cannot be reused. Attempting to call count() on the same stream throws an IllegalStateException.",
    topicId: "streams-lambdas",
    topicName: "Streams & Lambdas",
    difficulty: "Intermediate",
    javaVersion: "8+",
  },
  {
    id: 137,
    text: "What will be the output of the following code in Java 9?",
    code: `import java.util.*;
import java.util.stream.*;

public class Main {
  public static void main(String[] args) {
    Stream<String> stream = Stream.of("a", "b", "c", "d", "e");
    
    List<String> result = stream.takeWhile(s -> !s.equals("c"))
                              .collect(Collectors.toList());
    
    System.out.println(result);
    
    stream = Stream.of("a", "b", "c", "d", "e");
    result = stream.dropWhile(s -> !s.equals("c"))
                  .collect(Collectors.toList());
    
    System.out.println(result);
  }
}`,
    options: [
      { id: "a", text: "[a, b]\n[c, d, e]" },
      { id: "b", text: "[a, b, c]\n[d, e]" },
      { id: "c", text: "[a, b]\n[c]" },
      { id: "d", text: "IllegalStateException" },
    ],
    correctAnswer: "a",
    explanation:
      "Java 9 introduced takeWhile() and dropWhile(). takeWhile() takes elements while the predicate is true, stopping at the first false (when it finds 'c'). dropWhile() drops elements while the predicate is true, keeping the rest (from 'c' onward).",
    topicId: "streams-lambdas",
    topicName: "Streams & Lambdas",
    difficulty: "Advanced",
    javaVersion: "9+",
  },
  {
    id: 138,
    text: "What will be the output of the following code in Java 8?",
    code: `import java.util.*;
import java.util.stream.*;

public class Main {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
    
    IntSummaryStatistics stats = numbers.stream()
                                      .mapToInt(Integer::intValue)
                                      .summaryStatistics();
    
    System.out.println("Count: " + stats.getCount());
    System.out.println("Sum: " + stats.getSum());
    System.out.println("Min: " + stats.getMin());
    System.out.println("Max: " + stats.getMax());
    System.out.println("Average: " + stats.getAverage());
  }
}`,
    options: [
      { id: "a", text: "Count: 5\nSum: 15\nMin: 1\nMax: 5\nAverage: 3.0" },
      { id: "b", text: "Count: 5\nSum: 15\nMin: 1\nMax: 5\nAverage: 3" },
      { id: "c", text: "Count: 5\nSum: 15\nMin: 0\nMax: 5\nAverage: 3.0" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "a",
    explanation:
      "IntSummaryStatistics collects statistics about the elements in a stream. For the numbers 1 through 5, it calculates the count (5), sum (15), minimum (1), maximum (5), and average (3.0).",
    topicId: "streams-lambdas",
    topicName: "Streams & Lambdas",
    difficulty: "Intermediate",
    javaVersion: "8+",
  },
  {
    id: 139,
    text: "What will be the output of the following code in Java 8?",
    code: `import java.util.*;
import java.util.function.*;

public class Main {
  public static void main(String[] args) {
    Function<Integer, Integer> f = x -> x + 1;
    Function<Integer, Integer> g = x -> x * 2;
    
    Function<Integer, Integer> h1 = f.compose(g);
    Function<Integer, Integer> h2 = f.andThen(g);
    
    System.out.println(h1.apply(3));
    System.out.println(h2.apply(3));
  }
}`,
    options: [
      { id: "a", text: "7\n8" },
      { id: "b", text: "8\n7" },
      { id: "c", text: "7\n7" },
      { id: "d", text: "4\n6" },
    ],
    correctAnswer: "a",
    explanation:
      "compose() applies the argument function first, then the calling function. So h1 = f.compose(g) means h1(x) = f(g(x)) = g(x) + 1 = 2x + 1, giving h1(3) = 7. andThen() applies the calling function first, then the argument. So h2 = f.andThen(g) means h2(x) = g(f(x)) = 2(x + 1) = 2x + 2, giving h2(3) = 8.",
    topicId: "streams-lambdas",
    topicName: "Streams & Lambdas",
    difficulty: "Advanced",
    javaVersion: "8+",
  },
  {
    id: 140,
    text: "What will be the output of the following code in Java 8?",
    code: `import java.util.*;
import java.util.stream.*;

public class Main {
  public static void main(String[] args) {
    List<String> list = Arrays.asList("a", "b", "c");
    
    Stream<String> stream1 = list.stream();
    Stream<String> stream2 = stream1.map(String::toUpperCase);
    
    System.out.println(stream1.count());
    System.out.println(stream2.collect(Collectors.toList()));
  }
}`,
    options: [
      { id: "a", text: "3\n[A, B, C]" },
      { id: "b", text: "0\n[A, B, C]" },
      { id: "c", text: "3\nIllegalStateException" },
      { id: "d", text: "IllegalStateException" },
    ],
    correctAnswer: "d",
    explanation:
      "When stream1.count() is called, stream1 is consumed. Since stream2 is derived from stream1, attempting to use stream2 after stream1 is consumed throws an IllegalStateException. Streams can only be traversed once.",
    topicId: "streams-lambdas",
    topicName: "Streams & Lambdas",
    difficulty: "Intermediate",
    javaVersion: "8+",
  },

  // Multithreading - New Questions
  {
    id: 141,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    Thread t = new Thread(() -> {
      try {
        Thread.sleep(1000);
        System.out.println("Thread running");
      } catch (InterruptedException e) {
        System.out.println("Thread interrupted");
      }
    });
    
    t.start();
    System.out.println("Main thread");
  }
}`,
    options: [
      { id: "a", text: "Main thread\nThread running" },
      { id: "b", text: "Thread running\nMain thread" },
      { id: "c", text: "Main thread" },
      { id: "d", text: "Thread running" },
    ],
    correctAnswer: "a",
    explanation:
      "The main thread starts a new thread and continues execution without waiting. It prints 'Main thread' immediately. The new thread sleeps for 1 second and then prints 'Thread running'. Due to the sleep, 'Main thread' is printed first.",
    topicId: "multithreading",
    topicName: "Multithreading",
    difficulty: "Basic",
  },
  {
    id: 142,
    text: "What will be the output of the following code?",
    code: `public class Main {
  private static int counter = 0;
  
  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(() -> {
      for (int i = 0; i < 1000; i++) {
        counter++;
      }
    });
    
    Thread t2 = new Thread(() -> {
      for (int i = 0; i < 1000; i++) {
        counter++;
      }
    });
    
    t1.start();
    t2.start();
    
    t1.join();
    t2.join();
    
    System.out.println(counter);
  }
}`,
    options: [
      { id: "a", text: "2000" },
      { id: "b", text: "A value less than 2000" },
      { id: "c", text: "0" },
      { id: "d", text: "The output varies with each run" },
    ],
    correctAnswer: "d",
    explanation:
      "The counter++ operation is not atomic. It involves reading the value, incrementing it, and writing it back. When two threads perform this operation concurrently without synchronization, race conditions occur. The final value will be less than 2000 and will vary with each run.",
    topicId: "multithreading",
    topicName: "Multithreading",
    difficulty: "Intermediate",
  },
  {
    id: 143,
    text: "What will be the output of the following code?",
    code: `public class Main {
  private static int counter = 0;
  
  public static synchronized void increment() {
    counter++;
  }
  
  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(() -> {
      for (int i = 0; i < 1000; i++) {
        increment();
      }
    });
    
    Thread t2 = new Thread(() -> {
      for (int i = 0; i < 1000; i++) {
        increment();
      }
    });
    
    t1.start();
    t2.start();
    
    t1.join();
    t2.join();
    
    System.out.println(counter);
  }
}`,
    options: [
      { id: "a", text: "2000" },
      { id: "b", text: "A value less than 2000" },
      { id: "c", text: "0" },
      { id: "d", text: "The output varies with each run" },
    ],
    correctAnswer: "a",
    explanation:
      "The synchronized keyword ensures that only one thread can execute the increment() method at a time. This prevents race conditions, so each increment operation is atomic. Both threads increment the counter 1000 times each, resulting in a final value of 2000.",
    topicId: "multithreading",
    topicName: "Multithreading",
    difficulty: "Intermediate",
  },
  {
    id: 144,
    text: "What will be the output of the following code?",
    code: `import java.util.concurrent.atomic.*;

public class Main {
  private static AtomicInteger counter = new AtomicInteger(0);
  
  public static void main(String[] args) throws InterruptedException {
    Thread t1 = new Thread(() -> {
      for (int i = 0; i < 1000; i++) {
        counter.incrementAndGet();
      }
    });
    
    Thread t2 = new Thread(() -> {
      for (int i = 0; i < 1000; i++) {
        counter.incrementAndGet();
      }
    });
    
    t1.start();
    t2.start();
    
    t1.join();
    t2.join();
    
    System.out.println(counter.get());
  }
}`,
    options: [
      { id: "a", text: "2000" },
      { id: "b", text: "A value less than 2000" },
      { id: "c", text: "0" },
      { id: "d", text: "The output varies with each run" },
    ],
    correctAnswer: "a",
    explanation:
      "AtomicInteger provides atomic operations like incrementAndGet(), which increments the value and returns the new value atomically. This ensures thread safety without using synchronized methods. Both threads increment the counter 1000 times each, resulting in a final value of 2000.",
    topicId: "multithreading",
    topicName: "Multithreading",
    difficulty: "Intermediate",
    javaVersion: "5+",
  },
  {
    id: 145,
    text: "What will be the output of the following code?",
    code: `import java.util.concurrent.*;

public class Main {
  public static void main(String[] args) throws Exception {
    ExecutorService executor = Executors.newFixedThreadPool(2);
    
    Future<Integer> future1 = executor.submit(() -> {
      Thread.sleep(1000);
      return 10;
    });
    
    Future<Integer> future2 = executor.submit(() -> {
      Thread.sleep(500);
      return 20;
    });
    
    System.out.println(future1.get() + future2.get());
    
    executor.shutdown();
  }
}`,
    options: [
      { id: "a", text: "30" },
      { id: "b", text: "10" },
      { id: "c", text: "20" },
      { id: "d", text: "ExecutionException" },
    ],
    correctAnswer: "a",
    explanation:
      "The code submits two tasks to an executor service. future1.get() blocks until the first task completes (after 1 second) and returns 10. future2.get() returns 20 (the second task completes after 500ms, but we only get its result after the first task). The sum is 30.",
    topicId: "multithreading",
    topicName: "Multithreading",
    difficulty: "Advanced",
    javaVersion: "5+",
  },
  {
    id: 146,
    text: "What will be the output of the following code?",
    code: `import java.util.concurrent.*;

public class Main {
  public static void main(String[] args) {
    BlockingQueue<Integer> queue = new ArrayBlockingQueue<>(2);
    
    new Thread(() -> {
      try {
        System.out.println("Putting 1");
        queue.put(1);
        System.out.println("Putting 2");
        queue.put(2);
        System.out.println("Putting 3");
        queue.put(3);
        System.out.println("All items added");
      } catch (InterruptedException e) {
        e.printStackTrace();
      }
    }).start();
    
    try {
      Thread.sleep(1000);
      System.out.println("Taking " + queue.take());
      Thread.sleep(1000);
      System.out.println("Taking " + queue.take());
      Thread.sleep(1000);
      System.out.println("Taking " + queue.take());
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
  }
}`,
    options: [
      { id: "a", text: "Putting 1\nPutting 2\nPutting 3\nAll items added\nTaking 1\nTaking 2\nTaking 3" },
      { id: "b", text: "Putting 1\nPutting 2\nTaking 1\nPutting 3\nTaking 2\nAll items added\nTaking 3" },
      { id: "c", text: "Putting 1\nPutting 2\nTaking 1\nPutting 3\nAll items added\nTaking 2\nTaking 3" },
      { id: "d", text: "Putting 1\nPutting 2\nPutting 3\nTaking 1\nTaking 2\nTaking 3\nAll items added" },
    ],
    correctAnswer: "b",
    explanation:
      "ArrayBlockingQueue(2) creates a queue with capacity 2. The producer thread adds items 1 and 2, then blocks when trying to add item 3 because the queue is full. After 1 second, the consumer takes item 1, which allows the producer to add item 3. The process continues with the consumer taking items 2 and 3.",
    topicId: "multithreading",
    topicName: "Multithreading",
    difficulty: "Advanced",
    javaVersion: "5+",
  },
  {
    id: 147,
    text: "What will be the output of the following code in Java 8?",
    code: `import java.util.concurrent.*;

public class Main {
  public static void main(String[] args) throws Exception {
    CompletableFuture<String> future1 = CompletableFuture.supplyAsync(() -> {
      try {
        Thread.sleep(500);
        return "Hello";
      } catch (InterruptedException e) {
        return "Error";
      }
    });
    
    CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> {
      try {
        Thread.sleep(300);
        return "World";
      } catch (InterruptedException e) {
        return "Error";
      }
    });
    
    CompletableFuture<String> result = future1.thenCombine(future2, (s1, s2) -> s1 + " " + s2);
    
    System.out.println(result.get());
  }
}`,
    options: [
      { id: "a", text: "Hello World" },
      { id: "b", text: "World Hello" },
      { id: "c", text: "HelloWorld" },
      { id: "d", text: "Error Error" },
    ],
    correctAnswer: "a",
    explanation:
      "CompletableFuture.supplyAsync() executes tasks asynchronously. future1 returns 'Hello' after 500ms, and future2 returns 'World' after 300ms. thenCombine() waits for both futures to complete and then combines their results with the provided function, resulting in 'Hello World'.",
    topicId: "multithreading",
    topicName: "Multithreading",
    difficulty: "Advanced",
    javaVersion: "8+",
  },
  {
    id: 148,
    text: "What will be the output of the following code in Java 8?",
    code: `import java.util.concurrent.*;

public class Main {
  public static void main(String[] args) throws Exception {
    CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
      try {
        Thread.sleep(1000);
        if (true) throw new RuntimeException("Computation error");
        return "Result";
      } catch (InterruptedException e) {
        return "Interrupted";
      }
    }).exceptionally(ex -> "Recovered: " + ex.getMessage());
    
    System.out.println(future.get());
  }
}`,
    options: [
      { id: "a", text: "Result" },
      { id: "b", text: "Interrupted" },
      { id: "c", text: "Recovered: java.lang.RuntimeException: Computation error" },
      { id: "d", text: "ExecutionException" },
    ],
    correctAnswer: "c",
    explanation:
      "The task throws a RuntimeException. The exceptionally() method handles exceptions by providing a recovery function. It receives the exception and returns 'Recovered: ' followed by the exception message.",
    topicId: "multithreading",
    topicName: "Multithreading",
    difficulty: "Advanced",
    javaVersion: "8+",
  },

  // Exception Handling - New Questions
  {
    id: 149,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    try {
      System.out.print("A ");
      throw new RuntimeException();
    } catch (Exception e) {
      System.out.print("B ");
    } finally {
      System.out.print("C ");
    }
    System.out.print("D");
  }
}`,
    options: [
      { id: "a", text: "A B C D" },
      { id: "b", text: "A C D" },
      { id: "c", text: "A B C" },
      { id: "d", text: "A B D" },
    ],
    correctAnswer: "a",
    explanation:
      "The code prints 'A ', then throws a RuntimeException which is caught by the catch block, printing 'B '. The finally block always executes, printing 'C '. After the try-catch-finally, execution continues and 'D' is printed.",
    topicId: "exceptions",
    topicName: "Exception Handling",
    difficulty: "Basic",
  },
  {
    id: 150,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    try {
      System.out.print("A ");
      throw new RuntimeException();
    } catch (Exception e) {
      System.out.print("B ");
      return;
    } finally {
      System.out.print("C ");
    }
    System.out.print("D");
  }
}`,
    options: [
      { id: "a", text: "A B C D" },
      { id: "b", text: "A B C" },
      { id: "c", text: "A C" },
      { id: "d", text: "A B D" },
    ],
    correctAnswer: "b",
    explanation:
      "The code prints 'A ', then throws a RuntimeException which is caught, printing 'B '. The catch block has a return statement, but the finally block still executes before the method returns, printing 'C '. The code after finally ('D') is never reached due to the return in the catch block.",
    topicId: "exceptions",
    topicName: "Exception Handling",
    difficulty: "Intermediate",
  },
  {
    id: 151,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    try {
      System.out.print(divide(10, 0));
    } catch (ArithmeticException e) {
      System.out.print("E1 ");
    } catch (Exception e) {
      System.out.print("E2 ");
    }
  }
  
  public static int divide(int a, int b) {
    try {
      return a / b;
    } catch (ArithmeticException e) {
      throw new RuntimeException("Division by zero");
    } finally {
      System.out.print("F ");
    }
  }
}`,
    options: [
      { id: "a", text: "F E1" },
      { id: "b", text: "F E2" },
      { id: "c", text: "E1 F" },
      { id: "d", text: "E2 F" },
    ],
    correctAnswer: "b",
    explanation:
      "The divide method attempts to divide by zero, catching the ArithmeticException and throwing a RuntimeException. Before the exception propagates, the finally block executes, printing 'F '. In the main method, the RuntimeException is caught by the second catch block (Exception), printing 'E2 '.",
    topicId: "exceptions",
    topicName: "Exception Handling",
    difficulty: "Intermediate",
  },
  {
    id: 152,
    text: "What will be the output of the following code in Java 7?",
    code: `import java.io.*;

public class Main {
  public static void main(String[] args) {
    try (BufferedReader br = new BufferedReader(new StringReader("Hello"));
         BufferedWriter bw = new BufferedWriter(new StringWriter())) {
      
      String line = br.readLine();
      bw.write(line);
      System.out.print("A ");
      
    } catch (IOException e) {
      System.out.print("B ");
    } finally {
      System.out.print("C ");
    }
    System.out.print("D");
  }
}`,
    options: [
      { id: "a", text: "A C D" },
      { id: "b", text: "A B C D" },
      { id: "c", text: "A D" },
      { id: "d", text: "B C D" },
    ],
    correctAnswer: "a",
    explanation:
      "Java 7 introduced try-with-resources, which automatically closes resources declared in the try statement. The code reads 'Hello' and writes it to a StringWriter without errors, printing 'A '. The resources are automatically closed, and no exception occurs. The finally block always executes, printing 'C '. Then 'D' is printed.",
    topicId: "exceptions",
    topicName: "Exception Handling",
    difficulty: "Intermediate",
    javaVersion: "7+",
  },
  {
    id: 153,
    text: "What will be the output of the following code?",
    code: `class CustomException extends Exception {
  CustomException(String message) {
    super(message);
  }
}

public class Main {
  public static void main(String[] args) {
    try {
      method1();
      System.out.print("A ");
    } catch (CustomException e) {
      System.out.print(e.getMessage() + " ");
    }
    System.out.print("B");
  }
  
  public static void method1() throws CustomException {
    try {
      throw new CustomException("C");
    } catch (Exception e) {
      System.out.print("D ");
      throw new CustomException("E");
    }
  }
}`,
    options: [
      { id: "a", text: "D C B" },
      { id: "b", text: "D E B" },
      { id: "c", text: "D A B" },
      { id: "d", text: "C D B" },
    ],
    correctAnswer: "b",
    explanation:
      "method1() throws a CustomException with message 'C', which is caught in its own try-catch block, printing 'D '. It then throws a new CustomException with message 'E'. This exception propagates to the main method, where it's caught and its message is printed ('E '). Finally, 'B' is printed.",
    topicId: "exceptions",
    topicName: "Exception Handling",
    difficulty: "Advanced",
  },
  {
    id: 154,
    text: "What will be the output of the following code in Java 7?",
    code: `class Resource implements AutoCloseable {
  private final String name;
  
  Resource(String name) {
    this.name = name;
    System.out.print("Open " + name + " ");
  }
  
  @Override
  public void close() {
    System.out.print("Close " + name + " ");
  }
}

public class Main {
  public static void main(String[] args) {
    try (Resource r1 = new Resource("A");
         Resource r2 = new Resource("B")) {
      
      System.out.print("Using resources ");
      throw new RuntimeException("Exception");
      
    } catch (Exception e) {
      System.out.print("Caught " + e.getMessage() + " ");
    }
  }
}`,
    options: [
      { id: "a", text: "Open A Open B Using resources Close B Close A Caught Exception" },
      { id: "b", text: "Open A Open B Using resources Caught Exception Close B Close A" },
      { id: "c", text: "Open A Open B Using resources Close A Close B Caught Exception" },
      { id: "d", text: "Open A Open B Using resources Caught Exception" },
    ],
    correctAnswer: "a",
    explanation:
      "Resources are opened in the order declared (A then B). When an exception occurs, resources are closed in reverse order (B then A) before the catch block executes. The output shows: resources are opened, used, an exception occurs, resources are closed, and then the exception is caught.",
    topicId: "exceptions",
    topicName: "Exception Handling",
    difficulty: "Advanced",
    javaVersion: "7+",
  },
  {
    id: 155,
    text: "What will be the output of the following code in Java 9?",
    code: `import java.io.*;

public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new StringReader("Hello"));
    BufferedWriter bw = new BufferedWriter(new StringWriter());
    
    try (br; bw) {
      String line = br.readLine();
      bw.write(line);
      System.out.print("Resources used ");
    }
    
    try {
      br.readLine();
      System.out.print("Still open ");
    } catch (Exception e) {
      System.out.print("Closed ");
    }
  }
}`,
    options: [
      { id: "a", text: "Resources used Still open" },
      { id: "b", text: "Resources used Closed" },
      { id: "c", text: "Compilation error" },
      { id: "d", text: "IOException" },
    ],
    correctAnswer: "b",
    explanation:
      "Java 9 enhanced try-with-resources to allow using previously declared resources. The resources br and bw are declared outside the try block but are still managed by it. After the try block, they are closed. Attempting to use br after it's closed throws an exception, which is caught, printing 'Closed'.",
    topicId: "exceptions",
    topicName: "Exception Handling",
    difficulty: "Advanced",
    javaVersion: "9+",
  },

  // Inner & Anonymous Classes - New Questions
  {
    id: 156,
    text: "What will be the output of the following code?",
    code: `public class Main {
  private int x = 10;
  
  class Inner {
    private int x = 20;
    
    void printX() {
      System.out.println(x);
      System.out.println(this.x);
      System.out.println(Main.this.x);
    }
  }
  
  public static void main(String[] args) {
    Main main = new Main();
    Inner inner = main.new Inner();
    inner.printX();
  }
}`,
    options: [
      { id: "a", text: "10\n10\n10" },
      { id: "b", text: "20\n20\n10" },
      { id: "c", text: "10\n20\n10" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "b",
    explanation:
      "The Inner class has its own variable x with value 20, which shadows the outer class's x. Inside printX(), x refers to Inner's x (20), this.x also refers to Inner's x (20), and Main.this.x refers to the outer class's x (10).",
    topicId: "inner-classes",
    topicName: "Inner & Anonymous Classes",
    difficulty: "Basic",
  },
  {
    id: 157,
    text: "What will be the output of the following code?",
    code: `public class Main {
  private static int staticVar = 10;
  private int instanceVar = 20;
  
  static class StaticInner {
    void printVars() {
      System.out.println(staticVar);
      // System.out.println(instanceVar); // Uncommenting this line would cause a compilation error
    }
  }
  
  public static void main(String[] args) {
    StaticInner inner = new StaticInner();
    inner.printVars();
  }
}`,
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "20" },
      { id: "c", text: "10\n20" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "a",
    explanation:
      "A static nested class can access static members of the outer class but not instance members. The commented line would cause a compilation error if uncommented. The code prints only the static variable value (10).",
    topicId: "inner-classes",
    topicName: "Inner & Anonymous Classes",
    difficulty: "Basic",
  },
  {
    id: 158,
    text: "What will be the output of the following code?",
    code: `interface Greeting {
  void greet();
}

public class Main {
  public static void main(String[] args) {
    String name = "World";
    
    Greeting g1 = new Greeting() {
      @Override
      public void greet() {
        System.out.println("Hello, " + name + "!");
      }
    };
    
    g1.greet();
  }
}`,
    options: [
      { id: "a", text: "Hello, World!" },
      { id: "b", text: "Compilation error" },
      { id: "c", text: "Hello, null!" },
      { id: "d", text: "Runtime error" },
    ],
    correctAnswer: "a",
    explanation:
      "This code creates an anonymous class implementing the Greeting interface. Anonymous classes can access final or effectively final local variables from the enclosing method. Since 'name' is not modified after initialization, it's effectively final and can be accessed in the anonymous class.",
    topicId: "inner-classes",
    topicName: "Inner & Anonymous Classes",
    difficulty: "Intermediate",
  },
  {
    id: 159,
    text: "What will be the output of the following code?",
    code: `public class Main {
  public static void main(String[] args) {
    int x = 10;
    
    class LocalClass {
      void printX() {
        System.out.println(x);
      }
    }
    
    LocalClass local = new LocalClass();
    local.printX();
    
    // x = 20; // Uncommenting this line would cause a compilation error
  }
}`,
    options: [
      { id: "a", text: "10" },
      { id: "b", text: "20" },
      { id: "c", text: "Compilation error" },
      { id: "d", text: "Runtime error" },
    ],
    correctAnswer: "a",
    explanation:
      "A local class defined within a method can access local variables that are final or effectively final. Since x is not modified after initialization, it's effectively final and can be accessed in the local class. If the commented line were uncommented, x would no longer be effectively final, causing a compilation error.",
    topicId: "inner-classes",
    topicName: "Inner & Anonymous Classes",
    difficulty: "Intermediate",
  },
  {
    id: 160,
    text: "What will be the output of the following code in Java 8?",
    code: `interface Calculator {
  int calculate(int a, int b);
}

public class Main {
  public static void main(String[] args) {
    // Anonymous class
    Calculator add1 = new Calculator() {
      @Override
      public int calculate(int a, int b) {
        return a + b;
      }
    };
    
    // Lambda expression
    Calculator add2 = (a, b) -> a + b;
    
    System.out.println(add1.calculate(5, 3));
    System.out.println(add2.calculate(5, 3));
    
    System.out.println(add1.getClass().getName());
    System.out.println(add2.getClass().getName());
  }
}`,
    options: [
      { id: "a", text: "8\n8\nMain$1\nMain$2" },
      { id: "b", text: "8\n8\nMain$1\nMain$$Lambda$1/0x00000001234abcde" },
      { id: "c", text: "5\n3\nMain$1\nMain$$Lambda$1/0x00000001234abcde" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "b",
    explanation:
      "Both the anonymous class and lambda expression implement the Calculator interface and return the same result (8). However, they have different class names. The anonymous class is named Main$1, while the lambda expression has a synthetic class name generated by the JVM, typically containing 'Lambda' in its name.",
    topicId: "inner-classes",
    topicName: "Inner & Anonymous Classes",
    difficulty: "Advanced",
    javaVersion: "8+",
  },
  ...java21Questions,
]
