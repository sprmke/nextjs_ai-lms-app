export const courseOutlineContent = [
  {
    role: 'user',
    parts: [
      {
        text: `Generate a study material for Python for Exam and level of difficulty will be EASY with summary of crouse, list of chapters along with summary of each chapter, topic list in each chapter, all result in JSON format`,
      },
    ],
  },
  {
    role: 'model',
    parts: [
      {
        text: `Here's a breakdown of the thought process to generate the Python study material JSON:
1.  **Understand the Request:**

    *   **Subject:** Python
    *   **Purpose:** Exam study material
    *   **Difficulty:** EASY
    *   **Output Format:** JSON
    *   **Required Components:**
        *   Summary of course
        *   List of chapters
        *   Summary of each chapter
        *   Topic list in each chapter

2.  **Define "EASY" for Python:**

    *   Focus on core concepts, not advanced topics.
    *   Avoid complex algorithms, decorators, metaclasses, asyncio, etc.
    *   Keep explanations simple and direct.
    *   Emphasize foundational building blocks.

3.  **Outline the Course (High-Level Chapters):**

    *   Introduction to Python (What it is, why use it, setup)
    *   Basic Syntax and Data Types (Variables, numbers, strings, booleans)
    *   Operators (Arithmetic, comparison, logical)
    *   Control Flow (If/else, loops)
    *   Data Structures (Lists, tuples, dictionaries, maybe sets for completeness but keep it simple)
    *   Functions (Defining, calling, parameters, return values)
    *   Introduction to Modules (Importing, \`math\`, \`random\`)
    *   Basic File Handling (Reading and writing text files)
    *   (Optional, but good for "easy" completeness) Error Handling (try-except basics)

4.  **Flesh out each chapter with topics (and consider difficulty):**

    *   **Chapter 1: Introduction to Python**
        *   What is Python? (High-level, interpreted, easy to learn)
        *   Why Python? (Versatility, readability)
        *   Setting up Python (Mention IDLE, basic editors)
        *   Your First Python Program ("Hello, World!")
        *   Comments

    *   **Chapter 2: Variables and Basic Data Types**
        *   Variables (Naming rules, assignment)
        *   Data Types:
            *   Integers (\`int\`)
            *   Floating-point numbers (\`float\`)
            *   Strings (\`str\`) - basic operations like concatenation, indexing, slicing.
            *   Booleans (\`bool\`) - \`True\`, \`False\`
        *   Type Conversion (e.g., \`int()\`, \`str()\`)

    *   **Chapter 3: Operators**
        *   Arithmetic Operators (\`+\`, \`-\`, \`*\`, \`/\`, \`//\`, \`%\`, \`**\`)
        *   Comparison Operators (\`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`)
        *   Logical Operators (\`and\`, \`or\`, \`not\`)
        *   Assignment Operators (briefly, e.g., \`+=\`)

    *   **Chapter 4: Control Flow**
        *   Conditional Statements:
            *   \`if\`
            *   \`if-else\`
            *   \`if-elif-else\`
        *   Loops:
            *   \`for\` loop (with \`range()\`, iterating over sequences)
            *   \`while\` loop
            *   \`break\` and \`continue\` (simple examples)

    *   **Chapter 5: Data Structures**
        *   Lists (Creating, accessing, modifying, common methods like \`append\`, \`insert\`, \`remove\`, \`pop\`, \`len\`)
        *   Tuples (Immutable lists, creating, accessing)
        *   Dictionaries (Key-value pairs, creating, accessing, modifying, common methods like \`keys\`, \`values\`, \`items\`)
        *   (Maybe Sets: briefly mention uniqueness, \`add\`, \`remove\` - but can be skipped for "very easy") Let's include it for now, but keep it brief.

    *   **Chapter 6: Functions**
        *   What are functions? (Code reusability, organization)
        *   Defining functions (\`def\`)
        *   Calling functions
        *   Parameters and Arguments
        *   Return values (\`return\` statement)
        *   Scope (very basic idea - local vs. global, maybe too much for "easy"? Let's keep it to just acknowledging variables inside functions are usually local).

    *   **Chapter 7: Modules and Packages**
        *   What are modules? (Collections of functions/variables)
        *   Importing modules (\`import module_name\`, \`from module_name import something\`)
        *   Commonly used modules:
            *   \`math\` (e.g., \`sqrt\`, \`pi\`)
            *   \`random\` (e.g., \`randint\`, \`choice\`)

    *   **Chapter 8: Basic File Handling**
        *   Opening files (\`open()\`)
        *   Modes (\`'r'\`, \`'w'\`, \`'a'\`)
        *   Reading from files (\`read()\`, \`readline()\`, \`readlines()\`)
        *   Writing to files (\`write()\`)
        *   Closing files (\`close()\`, \`with\` statement)

    *   **Chapter 9: Basic Error Handling**
        *   What are errors/exceptions?
        *   \`try-except\` blocks (handling specific errors like \`ValueError\`, \`TypeError\`, \`FileNotFoundError\`)
        *   \`finally\` (optional, but good practice)

5.  **Write Summaries:**

    *   **Course Summary:** High-level overview of what the student will learn. Emphasize foundational skills.
    *   **Chapter Summaries:** Briefly state the purpose and key takeaways of each chapter.

6.  **Structure as JSON:**

    *   Top-level object.
    *   Key \`course_name\`: "Python for Beginners"
    *   Key \`difficulty_level\`: "EASY"
    *   Key \`course_summary\`: (The summary drafted above)
    *   Key \`chapters\`: An array of chapter objects.
    *   Each chapter object will have:
        *   \`chapter_number\`: Integer
        *   \`title\`: String
        *   \`summary\`: String (The chapter summary drafted above)
        *   \`topics\`: An array of strings (The topics listed for each chapter)

7.  **Review and Refine:**

    *   **Is it truly "EASY"?** Are there any topics that could be simplified or removed? (e.g., advanced string formatting, list comprehensions, lambda functions are definitely out).
    *   **Is the JSON valid?** Pay attention to commas, brackets, braces, quotes.
    *   **Are the summaries clear and concise?**
    *   **Is the topic list comprehensive enough for "easy" but not overwhelming?**
    *   Ensure consistency in naming and style.

    *Self-correction during review:*
    *   Initially, I might have thought about including basic Object-Oriented Programming (OOP) concepts, but for "EASY," that's probably too much. Stick to procedural.
    *   For "Modules," just stick to \`import\` and using a couple of simple standard library modules. No need to explain creating custom modules.
    *   For "Error Handling," keep it to the most basic \`try-except\` for common errors. Avoid custom exceptions or complex \`else\` clauses in \`try-except-else-finally\`.
    *   Make sure all strings are properly escaped if they contain special characters (though unlikely for this content).

8.  **Generate the JSON:** Translate the refined structure and content into valid JSON format. This is the most mechanical step but requires attention to detail. Using a text editor with JSON validation or a JSON formatter can be helpful.

This systematic approach ensures all requirements are met, the difficulty level is appropriate, and the output is well-structured and correct.`,
      },
      {
        text: `\`\`\`json
{
  "course_name": "Python Foundations for Beginners",
  "difficulty_level": "EASY",
  "course_summary": "This course provides a beginner-friendly introduction to the Python programming language. It covers fundamental concepts, basic syntax, data types, control flow, functions, and an introduction to using modules and handling files. The goal is to equip learners with the essential skills to write simple Python programs and build a strong foundation for further learning. No prior programming experience is assumed.",
  "chapters": [
    {
      "chapter_number": 1,
      "title": "Introduction to Python",
      "summary": "Learn what Python is, why it's popular, how to set up your Python environment, and write your very first Python program. Understand the basic structure of a Python script and how to use comments.",
      "topics": [
        "What is Python?",
        "Why Python? (Advantages: Readability, Versatility, Large Community)",
        "Setting up Python (Installing Python, IDLE)",
        "Writing and Running Your First Python Program ('Hello, World!')",
        "Understanding Python Syntax Basics (Indentation)",
        "Comments in Python (#)"
      ]
    },
    {
      "chapter_number": 2,
      "title": "Variables and Basic Data Types",
      "summary": "Explore how to store information using variables and learn about Python's fundamental data types: numbers (integers, floats), strings, and booleans. Understand how to perform basic operations with them.",
      "topics": [
        "What are Variables?",
        "Naming Conventions for Variables",
        "Assigning Values to Variables",
        "Data Types: Integers (int)",
        "Data Types: Floating-Point Numbers (float)",
        "Data Types: Strings (str) - creation, concatenation, basic indexing",
        "Data Types: Booleans (bool) - True, False",
        "Basic Input/Output (input() and print() functions)",
        "Type Conversion (e.g., int(), float(), str())"
      ]
    },
    {
      "chapter_number": 3,
      "title": "Operators in Python",
      "summary": "Discover the different types of operators in Python used to perform operations on variables and values. This includes arithmetic, comparison, and logical operators.",
      "topics": [
        "Arithmetic Operators (+, -, *, /, //, %, **)",
        "Comparison Operators (==, !=, >, <, >=, <=)",
        "Logical Operators (and, or, not)",
        "Assignment Operators (=, +=, -=, etc. - brief introduction)"
      ]
    },
    {
      "chapter_number": 4,
      "title": "Control Flow: Conditional Statements",
      "summary": "Learn how to make decisions in your programs using conditional statements. Cover 'if', 'elif', and 'else' to execute different blocks of code based on specific conditions.",
      "topics": [
        "The 'if' Statement",
        "The 'else' Statement",
        "The 'elif' Statement (else if)",
        "Nested 'if' Statements (simple examples)",
        "Combining Conditions with Logical Operators"
      ]
    },
    {
      "chapter_number": 5,
      "title": "Control Flow: Loops",
      "summary": "Understand how to repeat blocks of code using loops. This chapter covers 'for' loops for iterating over sequences and 'while' loops for repeating code as long as a condition is true. Also introduces 'break' and 'continue'.",
      "topics": [
        "The 'for' Loop",
        "Using 'range()' function with 'for' Loops",
        "Iterating over Strings and Lists with 'for' Loops",
        "The 'while' Loop",
        "The 'break' Statement (to exit a loop)",
        "The 'continue' Statement (to skip an iteration)"
      ]
    },
    {
      "chapter_number": 6,
      "title": "Data Structures: Lists and Tuples",
      "summary": "Introduce fundamental data structures for storing collections of items. Learn about Lists (mutable, ordered sequences) and Tuples (immutable, ordered sequences), including how to create them, access elements, and perform common operations.",
      "topics": [
        "Introduction to Data Structures",
        "Lists: Creating Lists, Accessing Elements (Indexing, Slicing)",
        "Lists: Modifying Lists (append, insert, remove, pop)",
        "Lists: Common List Methods (len, sort, reverse - basic usage)",
        "Tuples: Creating Tuples, Accessing Elements",
        "Differences between Lists and Tuples (Mutability)"
      ]
    },
    {
      "chapter_number": 7,
      "title": "Data Structures: Dictionaries",
      "summary": "Explore Dictionaries, a powerful data structure for storing data as key-value pairs. Learn how to create dictionaries, access values using keys, add new pairs, and modify existing ones.",
      "topics": [
        "What are Dictionaries? (Key-Value Pairs)",
        "Creating Dictionaries",
        "Accessing Values using Keys",
        "Adding and Modifying Key-Value Pairs",
        "Removing Key-Value Pairs (pop, del)",
        "Common Dictionary Methods (keys(), values(), items() - basic usage)"
      ]
    },
    {
      "chapter_number": 8,
      "title": "Functions",
      "summary": "Learn how to define and use functions to organize your code into reusable blocks. Understand parameters, arguments, and the 'return' statement for functions that produce results.",
      "topics": [
        "What are Functions? (Benefits: Reusability, Organization)",
        "Defining a Function (def keyword)",
        "Calling a Function",
        "Parameters and Arguments",
        "The 'return' Statement",
        "Function Docstrings",
        "Scope of Variables (Basic idea: Local vs Global - keep simple)"
      ]
    },
    {
      "chapter_number": 9,
      "title": "Introduction to Modules",
      "summary": "Discover how to use modules to extend Python's functionality. Learn how to import modules and use functions from some common built-in modules like 'math' and 'random'.",
      "topics": [
        "What are Modules?",
        "Importing Modules (import module_name)",
        "Using Functions from Modules (module_name.function_name())",
        "The 'math' Module (e.g., math.sqrt(), math.pi)",
        "The 'random' Module (e.g., random.randint(), random.choice())",
        "Importing specific functions (from module import function)"
      ]
    },
    {
      "chapter_number": 10,
      "title": "Basic File Handling",
      "summary": "Learn the basics of reading from and writing to text files. Understand how to open files, perform read/write operations, and properly close files.",
      "topics": [
        "Opening Files (open() function)",
        "File Modes ('r' - read, 'w' - write, 'a' - append)",
        "Reading from Files (read(), readline(), readlines())",
        "Writing to Files (write())",
        "Closing Files (close() method)",
        "Using the 'with' Statement for automatic file closing (best practice)"
      ]
    }
  ]
}
\`\`\``,
      },
    ],
  },
  {
    role: 'user',
    parts: [
      {
        text: `INSERT_INPUT_HERE`,
      },
    ],
  },
];

export const generateCourseOutline = (
  topic: string,
  courseType: string,
  difficultyLevel: string
) => {
  return `Generate a study material for ${topic} for ${courseType} and level of difficulty will be ${difficultyLevel} with summary of crouse, list of chapters along with summary of each chapter, topic list in each chapter, all result in JSON format`;
};
