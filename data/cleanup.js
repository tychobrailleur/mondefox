var MondeFox = {  
  IDS_TO_REMOVE: [ 'bandeau_bas' ],
  CLASSES_TO_REMOVE: [ 'plus_partages', 'ombre_section_audience' ],

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
      elements[el].parentNode.removeChild(elements[el]);
    }
  },
    
  // Remove element with  specific id.
  removeId: function (doc, idElement) {
    var element = doc.getElementById(idElement);
    element.parentNode.removeChild(element);
  }
};

MondeFox.removeUnwantedStuff(document);