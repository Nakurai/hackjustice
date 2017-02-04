"use strict;"

function vForm() {}

vForm.prototype = {

    /**
      change the HTML elements of the page
    */
    load: function(){
      $('#content').html(this.html());
    },

    /**
      returns the html content of the page itself
    */
    html: function(){
      return '<div>\
      <form class="w3-container" v-on:submit.prevent="sendUserInformation" style="width:60%;margin:auto;">\
        <fieldset>\
        <legend>Annual Income (CAD)</legend>\
          <input v-model="user.income" class="w3-input" type="number">\
        </fieldset>\
        \
        <fieldset>\
        <legend>Marital status</legend>\
          <input type="radio" id="mStatusMarried" value="married" v-model="user.maritalStatus">\
          <label for="mStatusMarried">Married</label>\
          <br>\
          <input type="radio" id="mStatusCommonLaw" value="commonlaw" v-model="user.maritalStatus">\
          <label for="mStatusCommonLaw">Common Law</label>\
          <br>\
          <input type="radio" id="mStatusSingle" value="single" v-model="user.maritalStatus">\
          <label for="mStatusSingle">Single</label>\
          <br>\
        </fieldset>\
        \
        <fieldset>\
        <legend>Issues in dispute</legend>\
          <input type="checkbox" id="issueDivorce" value="divorce" v-model="user.issues">\
          <label for="issueDivorce">Divorce</label>\
          <br>\
          <input type="checkbox" id="issueChildSupport" value="child-support" v-model="user.issues">\
          <label for="issueChildSupport">Child support</label>\
          <br>\
          <input type="checkbox" id="issueChildCustody" value="child-custody" v-model="user.issues">\
          <label for="issueChildCustody">Child custody</label>\
          <br>\
          <input type="checkbox" id="issueChildAccess" value="child-access" v-model="user.issues">\
          <label for="issueChildAccess">Child access</label>\
          <br>\
          <input type="checkbox" id="issueSpousalSupport" value="spousal-support" v-model="user.issues">\
          <label for="issueSpousalSupport">Spousal support</label>\
          <br>\
          <input type="checkbox" id="issuePossessionMatrimonialHome" value="possession-matrimonial-home" v-model="user.issues">\
          <label for="issuePossessionMatrimonialHome">Possession of matrimonial home</label>\
          <br>\
          <input type="checkbox" id="issueDivisionAssets" value="division-assets" v-model="user.issues">\
          <label for="issueDivisionAssets">Division of assets</label>\
          <br>\
          <input type="checkbox" id="issueChangeExistingAgreement" value="change-existing-agreement" v-model="user.issues">\
          <label for="issueChangeExistingAgreement">Change an existing agreement</label>\
          <br>\
        </fieldset>\
        <p>\
          <input type="submit" class="w3-btn" value="Send information">\
        </p>\
      </form>\
      </div>';
    }


};
