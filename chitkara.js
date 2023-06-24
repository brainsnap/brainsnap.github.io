window.addEventListener('DOMContentLoaded', function() {
  var courseDropdown = document.getElementById('course-dropdown');
  var semesterDropdown = document.getElementById('semester-dropdown');
  var subjectDropdown = document.getElementById('subject-dropdown');
  var chapterDropdown = document.getElementById('chapter-dropdown');
  var notesLink = document.getElementById('notes-link');

  var chapterNotes = {
    Btech: {
      semester1: {
        subject1: {
          chapter1: 'https://drive.google.com/file/d/15Jli54oShHkARESNrTA7TXTkw_RYrKFF/view?usp=drive_link',
          chapter2: 'https://drive.google.com/file/d/15FhgvmwNJGn8iUEurS6gNNq7j7ryUtHK/view?usp=drive_link',
          // Add more chapters for subject1 in semester1
        },
        subject2: {
          chapter1: 'https://drive.google.com/notes_link3',
          chapter2: 'https://drive.google.com/notes_link4',
          // Add more chapters for subject2 in semester1
        },
        // Add more subjects for semester1
      },
      semester2: {
        subject1: {
          chapter1: 'https://drive.google.com/notes_link5',
          chapter2: 'https://drive.google.com/notes_link6',
          // Add more chapters for subject1 in semester2
        },
        subject2: {
          chapter1: 'https://drive.google.com/notes_link7',
          chapter2: 'https://drive.google.com/notes_link8',
          // Add more chapters for subject2 in semester2
        },
        // Add more subjects for semester2
      },
      // Add more semesters for Btech
    },
    Mtech: {
      // Define links for Mtech courses in a similar manner
    },
    // Add more courses if needed
  };

  courseDropdown.addEventListener('change', function() {
    var selectedCourse = courseDropdown.value;
    resetDropdown(semesterDropdown);
    resetDropdown(subjectDropdown);
    resetDropdown(chapterDropdown);
    disableElement(semesterDropdown);
    disableElement(subjectDropdown);
    disableElement(chapterDropdown);
    disableLink(notesLink);

    if (selectedCourse) {
      populateSemesters(selectedCourse);
      enableElement(semesterDropdown);
    }
  });

  semesterDropdown.addEventListener('change', function() {
    var selectedCourse = courseDropdown.value;
    var selectedSemester = semesterDropdown.value;
    resetDropdown(subjectDropdown);
    resetDropdown(chapterDropdown);
    disableElement(subjectDropdown);
    disableElement(chapterDropdown);
    disableLink(notesLink);

    if (selectedCourse && selectedSemester) {
      populateSubjects(selectedCourse, selectedSemester);
      enableElement(subjectDropdown);
    }
  });

  subjectDropdown.addEventListener('change', function() {
    var selectedCourse = courseDropdown.value;
    var selectedSemester = semesterDropdown.value;
    var selectedSubject = subjectDropdown.value;
    resetDropdown(chapterDropdown);
    disableElement(chapterDropdown);
    disableLink(notesLink);

    if (selectedCourse && selectedSemester && selectedSubject) {
      populateChapters(selectedCourse, selectedSemester, selectedSubject);
      enableElement(chapterDropdown);
    }
  });

  chapterDropdown.addEventListener('change', function() {
    var selectedCourse = courseDropdown.value;
    var selectedSemester = semesterDropdown.value;
    var selectedSubject = subjectDropdown.value;
    var selectedChapter = chapterDropdown.value;
  
    if (selectedCourse && selectedSemester && selectedSubject && selectedChapter) {
      var notes = chapterNotes[selectedCourse][selectedSemester][selectedSubject][selectedChapter];
      if (notes) {
        enableLink(notesLink, notes);
      } else {
        disableLink(notesLink);
      }
    } else {
      disableLink(notesLink);
    }
  });

  function resetDropdown(dropdown) {
    dropdown.innerHTML = '<option value="">Select</option>';
  }

  function disableElement(element) {
    element.disabled = true;
  }

  function enableElement(element) {
    element.disabled = false;
  }

  function enableLink(link, notes) {
    link.href = notes;
    link.classList.add('enabled');
  }

  function disableLink(link) {
    link.removeAttribute('href');
    link.classList.remove('enabled');
  }

  function populateSemesters(course) {
    var semesters = Object.keys(chapterNotes[course]);
    semesters.forEach(function(semester) {
      var option = document.createElement('option');
      option.value = semester;
      option.textContent = semester;
      semesterDropdown.appendChild(option);
    });
  }

  function populateSubjects(course, semester) {
    var subjects = Object.keys(chapterNotes[course][semester]);
    subjects.forEach(function(subject) {
      var option = document.createElement('option');
      option.value = subject;
      option.textContent = subject;
      subjectDropdown.appendChild(option);
    });
  }

  function populateChapters(course, semester, subject) {
    var chapters = Object.keys(chapterNotes[course][semester][subject]);
    chapters.forEach(function(chapter) {
      var option = document.createElement('option');
      option.value = chapter;
      option.textContent = chapter;
      chapterDropdown.appendChild(option);
    });
  }
});
