// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback called when the URL of the current tab
 *   is found.
 */


var xhr = new XMLHttpRequest();


document.write("--------------------------CineWorld------------------------------------------------")


xhr.open("GET", "https://www.sinemalar.com/sinemasalonu/2018/elazig-cineworld-23", false);
xhr.send();

var result = xhr.responseText;
var array = result.split('<div class="grid8 bestof cinema-detail shadow">');
for (let i=1; i<array.length; i++) {
  if(i != array.length-1){
  document.write(array[i])
  }else{
    document.write(array[i].split('<div id="comments">')[0]);
  }
}

document.write("--------------------------Saray------------------------------------------------")



xhr.open("GET", "https://www.sinemalar.com/sinemasalonu/345/elazig-saray", false);
xhr.send();

var result = xhr.responseText;
var array = result.split('<div class="grid8 bestof cinema-detail shadow">');
for (let i=1; i<array.length; i++) {
  if(i != array.length-1){
  document.write(array[i])
  }else{
    document.write(array[i].split('<div id="comments">')[0]);
  }
}


