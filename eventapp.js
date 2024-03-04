document.getElementById('downloadIcon').addEventListener('click', function () {
    // Get the content to be downloaded
    var downloadContent = document.getElementById('downloadContent').innerText;

    // Create a Blob containing the content
    var blob = new Blob([downloadContent], { type: 'text/plain' });

    // Create a download link
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'card_details.txt';

    // Trigger the download
    link.click();
});

// Like Icon Click Event
document.getElementById('likeIcon').addEventListener('click', function () {
    // Add your like functionality here
    alert('Liked!');
});

// Drop down function section
$(document).ready(function () {
    $("#dropdownIcon").click(function () {
      $("#dropdownOptions").toggle();
    });

    $("input[type='radio']").change(function () {
      var selectedOption = $("input[name='options']:checked").val();
      $("#selectedOption").text(selectedOption);
      $("#dropdownOptions").hide();
    });

    // Close the drop-down when clicking outside of it
    $(document).on("click", function (e) {
      if (!$(e.target).closest("#dropdownOptions").length && !$(e.target).is("#dropdownIcon")) {
        $("#dropdownOptions").hide();
      }
    });
  });



// cancel section
  const sectionContainer = document.getElementById('sectionContainer');
    const cancelIcon = document.getElementById('cancelIcon');

    cancelIcon.addEventListener('click', () => {
        sectionContainer.style.display = 'none';
    });

//card review section
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 5000, // 5 seconds between slides
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });


      

      