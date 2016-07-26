$(document).ready(function(){
  $('.new-item').focus();

  $('.new-item').keyup(function(e) {
  if (e.keyCode === 27) {
    clear();
  } else if (e.keyCode === 13) {
    save();
    clear();
  }
});

  $('.items').on('change', '.item', function() {
    toggle($(this));
  });

  $('.items').on('click', '.trash', function() {
    trash($(this));
  });
});

function clear() {
  $('.new-item').val('');
}  $('.new-item').focus();


function save() {
  $('.items').prepend("<li><label><input type='checkbox' class='item' />" + $('.new-item').val() + "</label> <div class='trash'></div></li>");
  $('.new-item').focus();
}

function toggle(item) {
  if(item.is(":checked")) {
    item.parent().css('text-decoration', 'line-through');
  } else {
    item.parent().css('text-decoration','initial');
  }  
  $('.new-item').focus();    
}

function trash(item) {
  item.parent().remove();
  $('.new-item').focus();  
}