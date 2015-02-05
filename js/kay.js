var KAY =(function(module){
	
	module.Do = function(resultObject){
		resultObject.prepend(Date() + '<br/><br/>');
	};
	
	module.LEDON = function(resultObject){
		resultObject.load('http://arduino.local/arduino/digital/13/1') + resultObject.load('http://25.8.80.6/arduino/digital/13/1');
	};
	
	module.LEDOFF = function(resultObject){
		resultObject.load('http://arduino.local/arduino/digital/13/0') + resultObject.load('http://25.8.80.6/arduino/digital/13/0');
    };
 return module;
}(KAY ||{}));

