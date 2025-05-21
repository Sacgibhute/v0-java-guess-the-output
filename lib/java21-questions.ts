import type { Question } from "@/lib/types"

export const java21Questions: Question[] = [
  {
    id: 1001,
    text: "What will be the output of the following code in Java 21?",
    code: `public class Main {
  public static void main(String[] args) {
    String html = """
                  <html>
                    <body>
                      <h1>Hello, World!</h1>
                    </body>
                  </html>
                  """;
    System.out.println(html.lines().count());
  }
}`,
    options: [
      { id: "a", text: "1" },
      { id: "b", text: "5" },
      { id: "c", text: "6" },
      { id: "d", text: "7" },
    ],
    correctAnswer: "c",
    explanation:
      "Java 21 continues to support text blocks introduced in Java 15. The text block contains 6 lines, so lines().count() returns 6.",
    topicId: "data-types",
    topicName: "Data Types & Operators",
    difficulty: "Basic",
    javaVersion: "21",
  },
  {
    id: 1002,
    text: "What will be the output of the following code in Java 21?",
    code: `public class Main {
  public static void main(String[] args) {
    record Point(int x, int y) {}
    
    Object obj = new Point(1, 2);
    
    if (obj instanceof Point(int x, int y)) {
      System.out.println(x + y);
    }
  }
}`,
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "Compilation error" },
      { id: "c", text: "Runtime error" },
      { id: "d", text: "No output" },
    ],
    correctAnswer: "a",
    explanation:
      "Java 21 introduced record patterns in instanceof. If obj is a Point, the pattern extracts the x and y components into variables, which can then be used directly. The code prints 1 + 2 = 3.",
    topicId: "data-types",
    topicName: "Data Types & Operators",
    difficulty: "Intermediate",
    javaVersion: "21",
  },
  {
    id: 1003,
    text: "What will be the output of the following code in Java 21?",
    code: `public class Main {
  public static void main(String[] args) {
    record Person(String name, int age) {}
    
    var people = new Person[] {
      new Person("Alice", 25),
      new Person("Bob", 30),
      new Person("Charlie", 35)
    };
    
    for (Person(var name, var age) : people) {
      System.out.print(name + ":" + age + " ");
    }
  }
}`,
    options: [
      { id: "a", text: "Alice:25 Bob:30 Charlie:35" },
      { id: "b", text: "Compilation error" },
      { id: "c", text: "Runtime error" },
      { id: "d", text: "No output" },
    ],
    correctAnswer: "a",
    explanation:
      "Java 21 introduced enhanced for loops with patterns. The pattern Person(var name, var age) destructures each Person object in the array, binding its components to the variables name and age, which can then be used in the loop body.",
    topicId: "control-flow",
    topicName: "Control Flow",
    difficulty: "Advanced",
    javaVersion: "21",
  },
  {
    id: 1004,
    text: "What will be the output of the following code in Java 21?",
    code: `public class Main {
  public static void main(String[] args) {
    Object obj = "Hello";
    
    String result = switch (obj) {
      case String s when s.length() > 10 -> "Long string";
      case String s -> "String: " + s;
      case Integer i -> "Integer: " + i;
      default -> "Something else";
    };
    
    System.out.println(result);
  }
}`,
    options: [
      { id: "a", text: "String: Hello" },
      { id: "b", text: "Long string" },
      { id: "c", text: "Something else" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "a",
    explanation:
      "Java 21 enhanced pattern matching in switch statements. The switch matches obj against different patterns. Since obj is a String with length 5, it matches the second case, resulting in 'String: Hello'.",
    topicId: "control-flow",
    topicName: "Control Flow",
    difficulty: "Intermediate",
    javaVersion: "21",
  },
  {
    id: 1005,
    text: "What will be the output of the following code in Java 21?",
    code: `import java.util.concurrent.*;

public class Main {
  public static void main(String[] args) throws Exception {
    try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
      Future<String> future = executor.submit(() -> {
        Thread.sleep(100);
        System.out.println("Thread type: " + Thread.currentThread().isVirtual());
        return "Done";
      });
      
      System.out.println(future.get());
    }
  }
}`,
    options: [
      { id: "a", text: "Thread type: true\nDone" },
      { id: "b", text: "Thread type: false\nDone" },
      { id: "c", text: "Done\nThread type: true" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "a",
    explanation:
      "Java 21 finalized Virtual Threads as a standard feature. The code creates a virtual thread executor and submits a task that checks if the current thread is virtual (true) and returns 'Done'. The output shows the thread is virtual, followed by the result.",
    topicId: "multithreading",
    topicName: "Multithreading",
    difficulty: "Advanced",
    javaVersion: "21",
  },
  {
    id: 1006,
    text: "What will be the output of the following code in Java 21?",
    code: `public class Main {
  public static void main(String[] args) {
    record Point(int x, int y) {}
    record Rectangle(Point topLeft, Point bottomRight) {}
    
    Rectangle rect = new Rectangle(new Point(1, 2), new Point(5, 6));
    
    if (rect instanceof Rectangle(Point(int x1, int y1), Point(int x2, int y2))) {
      System.out.println("Width: " + (x2 - x1) + ", Height: " + (y2 - y1));
    }
  }
}`,
    options: [
      { id: "a", text: "Width: 4, Height: 4" },
      { id: "b", text: "Width: 4, Height: 4" },
      { id: "c", text: "Compilation error" },
      { id: "d", text: "Runtime error" },
    ],
    correctAnswer: "a",
    explanation:
      "Java 21 introduced nested record patterns. The pattern Rectangle(Point(int x1, int y1), Point(int x2, int y2)) destructures the Rectangle and its nested Point records, extracting the coordinates. The code calculates and prints the width (5-1=4) and height (6-2=4).",
    topicId: "oop",
    topicName: "Object-Oriented Programming",
    difficulty: "Expert",
    javaVersion: "21",
  },
  {
    id: 1007,
    text: "What will be the output of the following code in Java 21?",
    code: `public class Main {
  public static void main(String[] args) {
    String formatted = STR."Hello, \\{getName()}!";
    System.out.println(formatted);
  }
  
  static String getName() {
    return "World";
  }
}`,
    options: [
      { id: "a", text: "Hello, World!" },
      { id: "b", text: "Hello, \\{getName()}!" },
      { id: "c", text: "Hello, null!" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "a",
    explanation:
      "Java 21 introduced string templates with the STR template processor. The expression \\{getName()} is evaluated and its result is embedded in the string. Since getName() returns 'World', the output is 'Hello, World!'.",
    topicId: "data-types",
    topicName: "Data Types & Operators",
    difficulty: "Intermediate",
    javaVersion: "21",
  },
  {
    id: 1008,
    text: "What will be the output of the following code in Java 21?",
    code: `public class Main {
  public static void main(String[] args) {
    Object obj = new int[] {1, 2, 3};
    
    switch (obj) {
      case int[] arr when arr.length > 5 -> System.out.println("Long array");
      case int[] arr -> {
        int sum = 0;
        for (int i : arr) sum += i;
        System.out.println("Sum: " + sum);
      }
      case String s -> System.out.println("String: " + s);
      default -> System.out.println("Something else");
    }
  }
}`,
    options: [
      { id: "a", text: "Sum: 6" },
      { id: "b", text: "Long array" },
      { id: "c", text: "Something else" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "a",
    explanation:
      "Java 21 enhanced switch to support array patterns. The object is an int array with 3 elements, so it matches the second case. The code calculates and prints the sum of the array elements (1+2+3=6).",
    topicId: "control-flow",
    topicName: "Control Flow",
    difficulty: "Advanced",
    javaVersion: "21",
  },
  {
    id: 1009,
    text: "What will be the output of the following code in Java 21?",
    code: `public class Main {
  public static void main(String[] args) {
    var result = switch (3) {
      case 1 -> "One";
      case 2 -> "Two";
      case 3 -> "Three";
      default -> throw new IllegalArgumentException("Unexpected value");
    };
    
    System.out.println(result);
  }
}`,
    options: [
      { id: "a", text: "Three" },
      { id: "b", text: "IllegalArgumentException" },
      { id: "c", text: "Compilation error" },
      { id: "d", text: "No output" },
    ],
    correctAnswer: "a",
    explanation:
      "Java 21 fully supports switch expressions. The switch matches the value 3 and returns 'Three', which is assigned to result and then printed.",
    topicId: "control-flow",
    topicName: "Control Flow",
    difficulty: "Basic",
    javaVersion: "21",
  },
  {
    id: 1010,
    text: "What will be the output of the following code in Java 21?",
    code: `import java.util.concurrent.*;

public class Main {
  public static void main(String[] args) throws Exception {
    try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
      Callable<String> task1 = () -> {
        Thread.sleep(100);
        return "Result 1";
      };
      
      Callable<String> task2 = () -> {
        Thread.sleep(50);
        throw new RuntimeException("Task 2 failed");
      };
      
      var future1 = scope.fork(task1);
      var future2 = scope.fork(task2);
      
      try {
        scope.join();
        scope.throwIfFailed();
        
        System.out.println(future1.resultNow() + ", " + future2.resultNow());
      } catch (Exception e) {
        System.out.println("Error: " + e.getCause().getMessage());
      }
    }
  }
}`,
    options: [
      { id: "a", text: "Result 1, Result 2" },
      { id: "b", text: "Error: Task 2 failed" },
      { id: "c", text: "Result 1, null" },
      { id: "d", text: "Compilation error" },
    ],
    correctAnswer: "b",
    explanation:
      "Java 21 introduced Structured Concurrency with StructuredTaskScope. The ShutdownOnFailure scope cancels all tasks when any task fails. Task2 throws an exception, causing task1 to be cancelled. The throwIfFailed() method propagates the exception, which is caught and its message is printed.",
    topicId: "multithreading",
    topicName: "Multithreading",
    difficulty: "Expert",
    javaVersion: "21",
  },
]
