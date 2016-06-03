$(document).foundation()


var megaRoster = {
  init: function() {
    this.setupEventListeners();
    //this.count = 0;
  },

  setupEventListeners: function() {
    document.querySelector('#studentForm').onsubmit = this.addStudent.bind(this);
  },

  addStudent: function(ev) {
    //debugger;
    ev.preventDefault();
    var f = ev.currentTarget;
    var studentName = f.studentName.value;
    //this.count += 1;
    //var studentName = this.studentName.value; this here is #studentForm
    //console.log(studentName);
    var item = this.buildListItem(studentName);
    var list = document.querySelector('#studentList');
    //list.appendChild(item);
    this.prependChild(studentList, item);
    f.reset();
    f.studentName.focus();
  },

  prependChild: function(parent, child) {
      parent.insertBefore(child, parent.firstChild)
  },

  buildListItem: function(studentName){
    var item = document.createElement('li');
    item.innerText = studentName;
    this.appendLinks(item);

    return item;
  },

  appendLinks: function(item) {
    var deleteLink = this.buildLink({
      text: ' delete ',
      handler: function() {
        item.remove();
      }
    });
    var promoteLink = this.buildLink({
      text: ' promote ',
      handler: function() {
        item.style.border = '1px CornflowerBlue dashed';
      }
    });
    item.appendChild(deleteLink);
    item.appendChild(promoteLink);
  },

  buildLink: function(options) {
    var link = document.createElement('a');
    link.href = "#";
    link.innerText = options.text;
    link.onclick = options.handler;
    return link;
  },
};
megaRoster.init();
