"use strict";
var config = require('../config'),
nodemailer = require('nodemailer'),
//transporter = nodemailer.createTransport('smtps://'+config.mailsender.login+'%40gmail.com:'+config.mailsender.pwd+'@smtp.gmail.com');
transporter = nodemailer.createTransport('smtps://'+config.mailsender.login+'%40artbyacudj.xyz:'+config.mailsender.pwd+'@mail.gandi.net');

class Mail{

    /**
    */
    constructor() {
    }

    /**
     * Send contact request to admin
     */
    sendContact(infos){
      // setup e-mail data with unicode symbols
      var mailOptions = {
          from: '"'+config.mailsender.name+'" <'+config.mailsender.email+'>', // sender address
          replyTo: infos.email, // sender address
          to: config.mailsender.email, // list of receivers
          subject: '[contact] '+infos.subject, // Subject line
          text: infos.message
          //,html: '<b>Hello world ?</b>' // html body
      };

      return new Promise(
      (resolve, reject)=>{
        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
              reject(error);
            }
            else{
              resolve();
            }

        });
      });
    }


    /**
     * Send a new commission request to admin
     */
    sendCommission(infos){
      // setup e-mail data with unicode symbols
      var mailOptions = {
          from: '"'+config.mailsender.name+'" <'+config.mailsender.email+'>', // sender address
          replyTo: infos.email, // sender address
          to: config.mailsender.email, // list of receivers
          subject: 'new commission ! ', // Subject line
          text: 'the new commission comes from: '+infos.name +', '+infos.email + '\n\n Here is what they ask:\n\n'+infos.description
          //,html: '<b>Hello world ?</b>' // html body
      };

      return new Promise(
      (resolve, reject)=>{
        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
              reject(error);
            }
            else{
              resolve();
            }

        });
      });
    }


    /**
     * send order summary to the admin so they can prepare the command
     */
    sendNewOrderToProcess(infos){
      // setup e-mail data with unicode symbols
      var mailOptions = {
          from: '"'+config.mailsender.name+'" <'+config.mailsender.email+'>', // sender address
          replyTo: config.mailsender.email, // sender address
          to: config.mailsender.email, // list of receivers
          subject: '[new order] '+infos.nbItems+' items for '+infos.prices.totalPrice+'CAD', // Subject line
          text: 'New order !\n\n Order\'s summary: \n'+infos.summary+'\n\n To be sent at \n'+infos.address+'\n\n Expected payment:\n '+infos.prices.totalPrice+'CAD \n\n Congrats !!! :D'
          //,html: '<b>Hello world ?</b>' // html body
      };

      return new Promise(
      (resolve, reject)=>{
        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
              reject(error)
            }
            else{
              resolve();
            }

        })

      });
    }


    /**
     * send order summary to the admin so they can prepare the command
     */
    sendNewOrderConfirmationToCustomer(infos){
      // setup e-mail data with unicode symbols
      var mailOptions = {
          from: '"'+config.mailsender.name+'" <'+config.mailsender.email+'>', // sender address
          replyTo: config.mailsender.email, // sender address
          to: infos.email, // list of receivers
          subject: '[new order] Summary of your order', // Subject line
          text: 'Thank you for your order!\n\n Here is the summary: \n'+infos.summary+'\n\n Address of shipping: \n'+infos.address+'\n\n Price: '+infos.prices.totalPrice+'CAD. \n Two options of payment are available: \n - You can use Paypal easily on this page: http://paypal.me/artbyaudj \n - Or send me an e-transfer at this address: payment@artbyacudj.xyz. \n\n If you have any questions, please feel free to reply to this email directly. \n\n Art by ACUDJ'
          //,html: '<b>Hello world ?</b>' // html body
      };

      return new Promise(
      (resolve, reject)=>{

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
              reject(error)
            }
            else{
              resolve();
            }

        });

      });
    }





}

module.exports.mail = new Mail();
