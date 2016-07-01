    var Const = {};

    Const.responsecodeSucceed = 1;
    Const.responsecodeUnknownError = 6000000;
    Const.responsecodeParamErrorNoEmail = 6000001;
    Const.responsecodeParamErrorNoPassword = 6000002;
    Const.responsecodeParamErrorNoSecret = 6000003;
    Const.responsecodeParamErrorWrongEmail = 6000004;
    Const.responsecodeParamErrorWrongPassword = 6000005;
    Const.responsecodeParamErrorEmailExists = 6000006;
    Const.responsecodeParamErrorWrongSecret = 6000007;
    Const.responsecodeSignInError = 6000008;

    Const.httpCodeSucceed = 200;
    Const.httpCodeForbidden = 403;
    Const.httpCodeFileNotFound = 404;
    Const.httpCodeServerError = 500;

    Const.sessionkey = "supertaxisession";
    Const.sessionsalt = "8zgqvU6LaziThJI1uz3PevYd";

    Const.REUsername = /^[0-9A-Za-z._+-]{6,}$/;
    Const.REPassword = /^[0-9A-Za-z._+-]{6,}$/;
    Const.RENumbers = /^[0-9]*$/;

    module["exports"] = Const;