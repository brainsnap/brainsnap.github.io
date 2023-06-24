window.addEventListener('DOMContentLoaded', function() {
  var collegeList = document.getElementById('college-list');
  var colleges = collegeList.getElementsByTagName('li');
  var collegesArray = Array.from(colleges);

  collegesArray.sort(function(a, b) {
    var collegeA = a.textContent.toUpperCase();
    var collegeB = b.textContent.toUpperCase();

    if (collegeA < collegeB) {
      return -1;
    }
    if (collegeA > collegeB) {
      return 1;
    }
    return 0;
  });

  collegesArray.forEach(function(college) {
    collegeList.appendChild(college);
  });

  document.getElementById('search-input').addEventListener('input', function() {
    var searchInput = this.value.toLowerCase().trim();

    var searchError = document.getElementById('search-error');
    searchError.style.display = 'none';

    Array.from(colleges).forEach(function(college) {
      var collegeName = college.querySelector('a').textContent.toLowerCase();

      if (collegeName.includes(searchInput)) {
        college.style.display = 'flex';
      } else {
        college.style.display = 'none';
      }
    });

    if (!collegesArray.some(function(college) {
      return college.style.display !== 'none';
    })) {
      searchError.style.display = 'block';
    }
  });
});
