import ballerina/io;

type Person record {
    string id;
    string firstName;
    string lastName;
    int age;
    string country;
};

type Course record {
    string id;
    string name;
    int credits;
};

type Student record {
    string id;
    string fullName;
    string age;
    record {
        string title;
        int credits;
    }[] courses;
    int totalCredits;
    string visaType;
};

const D_TIER_4_VISA = "D tier-4";

var totalCredits = function(int total, record {string id; string name; int credits;} course) returns int => total + (course.id.startsWith("CS") ? course.credits : 0);

function transform(Person person, Course[] courses) returns Student => let var isForeign = person.country != "LK" in {
        id: person.id + (isForeign ? "F" : ""),
        age: person.age.toString(),
        fullName: person.firstName + " " + person.lastName,
        courses: from var coursesItem in courses
            where coursesItem.id.startsWith("CS")
            select {
                title: coursesItem.id + " - " + coursesItem.name,
                credits: coursesItem.credits
            },
        visaType: isForeign ? D_TIER_4_VISA : "n/a",
        totalCredits: courses.reduce(totalCredits, 0)
    };

public function main() {
    Person person = {
        id: "1001",
        firstName: "Vinnie",
        lastName: "Hickman",
        age: 15,
        country: "UK"
    };

    Course[] courses = [
            {
                id: "CS6002",
                name: "Computation Structures",
                credits: 4
            },
            {
                id: "CS6003",
                name: "Circuits and Electronics",
                credits: 3
            },
            {
                id: "CM1001",
                name: "Computational Statistics",
                credits: 4
            },
            {
                id: "CS6004",
                name: "Signals and Systems",
                credits: 3
            }
        ];

    Student student = transform(person, courses);
    io:println(student);
}
