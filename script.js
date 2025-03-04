document.querySelector('.ham-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
  });


// tło nie dotykać bo spierdolis
new FinisherHeader({
    "count": 100,
    "size": {
      "min": 1,
      "max": 18,
      "pulse": 0.1
    },
    "speed": {
      "x": {
        "min": 0,
        "max": 0.5
      },
      "y": {
        "min": 0,
        "max": 0.5
      }
    },
    "colors": {
      "background": "#1d4c92",
      "particles": [
        "#ffffff",
        "#87ddfe",
        "#acaaff",
        "#1bffc2",
        "#f88aff"
      ]
    },
    "blending": "screen",
    "opacity": {
      "center": 0,
      "edge": 0.3
    },
    "skew": 0,
    "shapes": [
      "t",
      "s",
      "c"
    ]
  });