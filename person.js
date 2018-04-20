/**
 * Created by csriioo on 2018/4/15.
 */
function person(){
    this.say = function(){
        console.log('saying');
    };
    this.eat = function(){
      console.log('eating');
    }
}
module.exports = person;