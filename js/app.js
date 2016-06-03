$(document).foundation()


var megaRoster = {
  init: function(listSelector) {
    this.studentList = document.querySelector(listSelector);
    this.setupEventListeners();
    this.count = 0;
  },

  setupEventListeners: function() {
    document.querySelector('#studentForm').onsubmit = this.addStudent.bind(this);
  },

  addStudent: function(ev) {
    //debugger;
    ev.preventDefault();
    var f = ev.currentTarget;
    var studentName = f.studentName.value;
    var listItem = this.buildListItem(studentName);
    this.prependChild(this.studentList, listItem);
    f.reset();
    f.studentName.focus();
  },

  prependChild: function(parent, child) {
      parent.insertBefore(child, parent.firstChild)
  },

  buildListItem: function(studentName){
    var listItem = document.createElement('li');
    listItem.innerText = studentName;
    this.appendLinks(listItem);

    return listItem;
  },

  appendLinks: function(listItem) {
    var span = document.createElement('span');
    span.className += 'actions'
    var deleteLink = this.buildLink({
      text: ' delete ',
      handler: function() {
        listItem.remove();
      }
    });
    var promoteLink = this.buildLink({
      text: ' promote ',
      handler: function(ev) {
        this.promote(listItem);
      }
    });
    span.appendChild(deleteLink);
    span.appendChild(promoteLink);
    listItem.appendChild(span);
  },

  buildLink: function(options) {
    var link = document.createElement('a');
    link.href = "#";
    link.innerText = options.text;
    link.onclick = options.handler;
    return link;
  },

  promote: function(ev) {
    var listItem = ev.currentTarget.parentNode.parentNode;
    this.prependChild(this.studentList, listItem);
  }
};
megaRoster.init('#studentList');
