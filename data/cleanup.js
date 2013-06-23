var MondeFox = {
  // ids to be removed.
  IDS_TO_REMOVE: [ 'bandeau_bas' ],
  
  // CSS Classes to be removed
  CLASSES_TO_REMOVE: [ 'plus_partages' ],
  
  // Classes containing "img" to be reduced
  IMGS_TO_REDUCE: ['titre_une','img_tt_chapo'],

  removeUnwantedStuff: function(doc) {
    for (var i in this.IDS_TO_REMOVE) {
      this.removeId(doc, this.IDS_TO_REMOVE[i]);
    }
    for (var c in this.CLASSES_TO_REMOVE) {
      this.removeClass(doc, this.CLASSES_TO_REMOVE[c]);
    }   
  },

  // Remove elements with a given class.
  removeClass: function(doc, className) {
    var elements = doc.getElementsByClassName(className);
    for (var el in elements) {
      if (elements[el].parentNode) {
        elements[el].parentNode.removeChild(elements[el]);
      }
    }
  },
    
  // Remove element with  specific id.
  removeId: function (doc, idElement) {
    var element = doc.getElementById(idElement);
    if (element) {
      element.parentNode.removeChild(element);
    }
  },

  // Make logo on home page clickable to reload homepage.
  makeLogoClickable: function(doc) {
    var element = doc.getElementById("logo");
    if (element) {
      element.style.cursor = "pointer";
      element.addEventListener("click", function(evt) {
        window.location.href = "http://www.lemonde.fr";
      });
    }
  },
  
  // Make “chapeau” images a tad smaller
  makeChapeauImagesSmaller: function(doc) {
    for (var classes in this.IMGS_TO_REDUCE) {
      var elements = doc.getElementsByClassName(this.IMGS_TO_REDUCE[classes]);
    
      for (var i in elements) {
        var descendants = [];
        this.getDescendants(doc, elements[i], descendants);
        for (var j in descendants) {
          var current = descendants[j];
          if (current.tagName == "IMG") {
            current.height = current.height / 2;
            current.width = current.width / 2;
          }
        }
      }
    }
  },
  
  getDescendants: function(doc, element, descendants) {
    if (element.nodeType === Node.ELEMENT_NODE) {
      descendants.push(element);
      for (var i in element.childNodes) {
        var currentElement = element.childNodes[i];
        if (currentElement.nodeType === Node.ELEMENT_NODE) {
          if (currentElement.childNodes) {
            this.getDescendants(doc, currentElement, descendants);
          }
        }
      }
    }
  },
  
  flatten: function(array) {
    var newArray = [];
    for (var i in array) {
      var element = array[i];
      if (element instanceof Array) {
        newArray.concat(this.flatten(element));
      } else {
        newArray.push(element);
      }
    }
    
    return newArray;
  }
}

// That’s where the stuff happens.
MondeFox.makeChapeauImagesSmaller(document);
MondeFox.removeUnwantedStuff(document);
MondeFox.makeLogoClickable(document);


