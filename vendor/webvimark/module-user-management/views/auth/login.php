<?php

/**
 * @var $this yii\web\View
 * @var $model webvimark\modules\UserManagement\models\forms\LoginForm
 */
use webvimark\modules\UserManagement\components\GhostHtml;
use webvimark\modules\UserManagement\UserManagementModule;
use yii\bootstrap\ActiveForm;
use yii\helpers\Html;
?>

<div id="appMountPoint">
    <div class="login-wrapper hybrid-login-wrapper">
        <div class="login-wrapper-background"><img class="concord-img vlv-creative" src="../../../images/large.jpg" alt=""></div>
        <!--<div class="nfHeader login-header signupBasicHeader"><a href="/" class="svg-nfLogo signupBasicHeader" data-uia="netflix-header-svg-logo"><svg viewBox="0 0 111 30" class="svg-icon svg-icon-netflix-logo" focusable="true">
                <g id="netflix-logo">
                <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path>
                </g>
                </svg><span class="screen-reader-text">MovieDay</span></a>
        </div>-->
        <div class="nfHeader login-header signupBasicHeader"><a href="/" style="text-decoration: none;" class="svg-nfLogo signupBasicHeader" data-uia="netflix-header-svg-logo">                
                <g id="netflix-logo">
                <h1 style="color: red;margin-top: 12px;font-size: 2.9em;"><b>MOVIEDAY</b></h1>
                </g>
                <span class="screen-reader-text">MovieDay</span></a>
        </div>
        <div class="login-body">
            <div><noscript>
                <div data-uia="error-message-container" class="ui-message-container ui-message-error">
                    <div class="ui-message-icon"></div>
                    <div data-uia="text" class="ui-message-contents">Looks like you have disabled JavaScript. Please enable JavaScript to restore full page functionality.</div>
                </div>
                </noscript>
                <div class="login-content login-form hybrid-login-form hybrid-login-form-signup" data-uia="login-page-container">
                    <div class="hybrid-login-form-main">

                        <?php
                        $form = ActiveForm::begin([
                                    'id' => 'login-form',
                                    'options' => ['autocomplete' => 'off'],
                                    'validateOnBlur' => false,
                                    'fieldConfig' => [
                                        'template' => "{input}\n{error}",
                                    ],
                                ])
                        ?>

                        <h1 data-uia="login-page-title">Sign In</h1>
                        <form method="post" class="login-form" action="">
                            <div data-uia="login-field+container" class="nfInput nfEmailPhoneInput login-input login-input-email">
                                <div class="nfInputPlacement">
                                    <div class="nfEmailPhoneControls">
                                        <!-- comment -->
                                        <label class="input_id">
                                            <!--<input type="text" data-uia="login-field" name="userLoginId" class="nfTextField" id="id_userLoginId" value="" tabindex="0" autocomplete="email" dir=""><label for="id_userLoginId" class="placeLabel">Email or phone number</label>-->
                                            <?=
                                                    $form->field($model, 'username')
                                                    ->textInput(['placeholder' => $model->getAttributeLabel('username'), 'class' => 'nfTextField', 'autocomplete' => 'off'])
                                            ?>
                                        </label>
                                        <!-- comment -->
                                    </div>
                                </div>
                            </div>
                            <div data-uia="password-field+container" class="nfInput nfPasswordInput login-input login-input-password">
                                <div class="nfInputPlacement">
                                    <!-- comment -->
                                    <div class="nfPasswordControls">
                                        <label class="input_id">
                                            <!--<input type="password" data-uia="password-field" name="password" class="nfTextField" id="id_password" value="" tabindex="0" autocomplete="password" dir="">-->
                                            <?=
                                                    $form->field($model, 'password')
                                                    ->passwordInput(['placeholder' => $model->getAttributeLabel('password'), 'class' => 'nfTextField', 'autocomplete' => 'off'])
                                            ?>
                                            <!--<label for="id_password" class="placeLabel">Password</label>-->
                                        </label><button data-uia="password-visibility-toggle" id="id_password_toggle" type="button" class="nfPasswordToggle" title="Show Password">SHOW</button></div>

                                    <!-- comment -->
                                    <?= (isset(Yii::$app->user->enableAutoLogin) && Yii::$app->user->enableAutoLogin) ? $form->field($model, 'rememberMe')->checkbox(['value' => true]) : '' ?>
                                    <!-- comment -->
                                </div>
                            </div>
                            <!-- comment -->
                            <!--<button class="btn login-button btn-submit btn-small" type="submit" autocomplete="off" tabindex="0" data-uia="login-submit-button"><a href="index.html">Sign In</a></button>-->
                            <?=
                            Html::submitButton(
                                    UserManagementModule::t('front', 'Sign In'),
                                    ['class' => 'btn login-button btn-submit btn-small']
                            )
                            ?>
                            <!-- comment -->
                            <div class="hybrid-login-form-help">
                                <div class="ui-binary-input login-remember-me"><input type="checkbox" class="" name="rememberMe" id="bxid_rememberMe_true" value="true" tabindex="0" data-uia="rememberMe" checked=""><label for="bxid_rememberMe_true" data-uia="label+rememberMe"><span class="login-remember-me-label-text">Remember me</span></label>
                                    <div class="helper"></div>
                                </div><a class="link login-help-link" target="_self" data-uia="login-help-link">Need help?</a>
                            </div><input type="hidden" name="flow" value="websiteSignUp"><input type="hidden" name="mode" value="login"><input type="hidden" name="action" value="loginAction"><input type="hidden" name="withFields" value="rememberMe,nextPage,userLoginId,password,countryCode,countryIsoCode,recaptchaResponseToken,recaptchaError,recaptchaResponseTime"><input type="hidden" name="authURL" value="1619902680728.uj9wR59863UIp+1yArYcVi7osZk="><input type="hidden" name="nextPage" value=""><input type="hidden" name="showPassword" value=""><input type="hidden" name="countryCode" value="+52"><input type="hidden" name="countryIsoCode" value="MX">
                        </form>
                    </div>
                    <div class="hybrid-login-form-other">
                        <form method="post" class="login-form" action="">
                            <input type="hidden" name="flow" value="websiteSignUp"><input type="hidden" name="mode" value="login"><input type="hidden" name="action" value="facebookLoginAction"><input type="hidden" name="withFields" value="rememberMe,nextPage,accessToken"><input type="hidden" name="authURL" value="1619902680728.uj9wR59863UIp+1yArYcVi7osZk="><input type="hidden" name="nextPage" value=""><input type="hidden" name="showPassword" value=""><input type="hidden" name="countryCode" value="+52"><input type="hidden" name="countryIsoCode" value="MX"><input type="hidden" name="accessToken" value="">
                        </form>
                        <div class="login-signup-now" data-uia="login-signup-now">New to Netflix? <a class=" " target="_self" href="/">Sign up now</a>.</div>
                        <div class="recaptcha-terms-of-use" data-uia="recaptcha-terms-of-use">
                            <p><span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>&nbsp;<button class="recaptcha-terms-of-use--link-button" data-uia="recaptcha-learn-more-button">Learn more.</button></p>
                            <div class="recaptcha-terms-of-use--disclosure" data-uia="recaptcha-disclosure"><span id="" data-uia="recaptcha-disclosure-text">The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy" id="recaptcha-privacy-link" data-uia="recaptcha-privacy-link" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" id="recaptcha-tos-link" data-uia="recaptcha-tos-link" target="_blank">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- comment -->
        <div class="row registration-block">
            <div class="col-sm-6">
                <?=
                GhostHtml::a(
                        UserManagementModule::t('front', "Registration"),
                        ['/user-management/auth/registration']
                )
                ?>
            </div>
            <div class="col-sm-6 text-right">
                <?=
                GhostHtml::a(
                        UserManagementModule::t('front', "Forgot password ?"),
                        ['/user-management/auth/password-recovery']
                )
                ?>
            </div>
        </div>
        <!-- comment -->

    </div>
</div>
<?php ActiveForm::end() ?>
<?php
$css = <<<CSS
html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}
body {
    margin: 0;
}
a {
    background-color: transparent;
}
a:active,
a:hover {
    outline: 0;
}
h1 {
    font-size: 2em;
    margin: 0.67em 0;
}
img {
    border: 0;
}
svg:not(:root) {
    overflow: hidden;
}
button,
input {
    color: inherit;
    font: inherit;
    margin: 0;
}
button {
    overflow: visible;
}
button {
    text-transform: none;
}
button {
    -webkit-appearance: button;
    cursor: pointer;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
}
input {
    line-height: normal;
}
input[type="checkbox"] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}
body,
html {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f3f3f3;
    color: #333;
    font-size: 16px;
    direction: ltr;
}
h1 {
    font-size: 1.5em;
    color: #333;
    margin: 0 0 0.4em;
    font-weight: 400;
}
@media screen and (min-width: 740px) {
    h1 {
        font-size: 2.15em;
        margin: 0 0 0.55em;
    }
}
a {
    text-decoration: none;
    color: #0080ff;
}
a:hover {
    text-decoration: underline;
}
.screen-reader-text {
    position: absolute;
    top: -9999px;
    left: -9999px;
}
html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}
body {
    margin: 0;
}
a {
    background-color: transparent;
}
a:active,
a:hover {
    outline: 0;
}
h1 {
    font-size: 2em;
    margin: 0.67em 0;
}
img {
    border: 0;
}
svg:not(:root) {
    overflow: hidden;
}
button,
input {
    color: inherit;
    font: inherit;
    margin: 0;
}
button {
    overflow: visible;
}
button {
    text-transform: none;
}
button {
    -webkit-appearance: button;
    cursor: pointer;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
}
input {
    line-height: normal;
}
input[type="checkbox"] {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}
.nfHeader {
    background-color: #fafafa;
    border-bottom: solid 1px #dcdde0;
    height: 90px;
    z-index: 2;
}
.nfHeader.signupBasicHeader {
    height: 90px;
}
@media screen and (max-width: 700px) {
    .nfHeader.signupBasicHeader {
        height: 75px;
    }
}
@media screen and (max-width: 440px),
screen and (orientation: landscape) and (max-width: 700px) {
    .nfHeader.signupBasicHeader {
        height: 45px;
    }
}
.svg-nfLogo {
    text-decoration: none;
    vertical-align: middle;
    fill: #e50914;
    display: inline-block;
    line-height: 90px;
}
.svg-nfLogo .svg-icon-netflix-logo {
    height: 45px;
    width: 167px;
    vertical-align: middle;
}
@media screen and (max-width: 700px) {
    .svg-nfLogo {
        line-height: 75px;
    }
}
@media screen and (max-width: 440px),
screen and (orientation: landscape) and (max-width: 700px) {
    .svg-nfLogo {
        line-height: 45px;
    }
}
@media screen and (max-width: 440px),
screen and (orientation: landscape) and (max-width: 700px) {
    .svg-nfLogo .svg-icon-netflix-logo {
        height: 20px;
        width: 75px;
        padding-top: 12px;
    }
}
.svg-nfLogo.signupBasicHeader {
    margin-left: 3%;
}
.login-remember-me {
    display: inline-block;
    margin-bottom: -5px;
}
.login-remember-me input {
    margin-right: 10px;
}
.login-remember-me-label-text {
    font-size: 14px;
}
body,
html {
    height: 100%;
}
h1 {
    margin: 0 0 10px 0;
    padding: 0;
}
@media only screen and (min-width: 740px) {
    h1 {
        margin-bottom: 20px;
    }
}
#appMountPoint {
    height: 100%;
}
@media only screen and (min-width: 740px) {
    #appMountPoint {
        background-color: transparent;
        color: #fff;
    }
}
#appMountPoint > div {
    min-height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 0;
}
#appMountPoint > div .login-wrapper-background {
    display: none;
}
@media only screen and (min-width: 740px) {
    #appMountPoint > div {
        background-color: #000;
        color: #fff;
    }
    #appMountPoint > div .login-wrapper-background {
        -webkit-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;
        display: block;
        height: 100%;
        min-height: 100vh;
        overflow: hidden;
        position: absolute;
        width: 100%;
        z-index: -1;
    }
    #appMountPoint > div .login-wrapper-background .vlv-creative {
        min-height: 100%;
        min-width: 100%;
    }
}
.login-content {
    padding-top: 20px;
    background-color: #f3f3f3;
}
@media only screen and (min-width: 740px) {
    .login-content {
        padding: 40px;
    }
}
@media only screen and (min-width: 500px) {
    .login-content {
        min-width: 380px;
    }
}
.login-body {
    color: #333;
    margin: 0 auto;
    padding: 0 5%;
}
@media only screen and (min-width: 740px) {
    .login-body {
        margin: 0 auto -236px;
        min-height: 100vh;
        background-color: transparent;
        max-width: 450px;
    }
    .login-body:before {
        content: "";
        height: 91px;
        display: block;
    }
    .login-body:after {
        content: "";
        height: 236px;
        display: block;
    }
}
@media only screen and (min-width: 740px) {
    .nfHeader.login-header.login-header {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        border-bottom: transparent;
        background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(rgba(0, 0, 0, 0.5)),
            to(rgba(0, 0, 0, 0))
            );
        background: -webkit-linear-gradient(
            top,
            rgba(0, 0, 0, 0.5) 0,
            rgba(0, 0, 0, 0) 100%
            );
        background: -moz-
            oldlinear-gradient(top, rgba(0, 0, 0, 0.5) 0, rgba(0, 0, 0, 0) 100%);
        background: -o-linear-gradient(
            top,
            rgba(0, 0, 0, 0.5) 0,
            rgba(0, 0, 0, 0) 100%
            );
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.5) 0,
            rgba(0, 0, 0, 0) 100%
            );
    }
}
.ui-binary-input {
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 36px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 16px;
}
.ui-binary-input input:disabled ~ .helper,
.ui-binary-input input[type="checkbox"]:disabled + label {
    color: #b3b3b3;
}
.ui-binary-input .helper {
    font-size: 14px;
    line-height: 1.3em;
    color: grey;
}
.ui-binary-input input[type="checkbox"] {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
}
.ui-binary-input input[type="checkbox"]:focus + label::before {
    -webkit-box-shadow: 0 0 5px 2px rgba(150, 200, 255, 0.6);
    -moz-box-shadow: 0 0 5px 2px rgba(150, 200, 255, 0.6);
    box-shadow: 0 0 5px 2px rgba(150, 200, 255, 0.6);
    border-color: grey;
}
.ui-binary-input input[type="checkbox"] + label {
    color: #333;
    position: relative;
    display: block;
    line-height: 1.2;
    padding: 6px 0;
}
.ui-binary-input input[type="checkbox"] + label:before {
    content: "";
    position: absolute;
    display: block;
    top: 2px;
    left: -36px;
    padding: 0;
    border: 1px solid #b3b3b3;
    background-color: #fff;
}
.ui-binary-input input[type="checkbox"] + label:after {
    position: absolute;
}
.ui-binary-input input[type="checkbox"] + label:before {
    width: 25px;
    height: 25px;
}
.ui-binary-input input[type="checkbox"]:checked + label:after {
    color: #0080ff;
    content: "\e804";
    top: -2px;
    left: -36px;
    font-family: nf-icon;
    font-size: 28px;
}
.ui-binary-input input[type="checkbox"]:disabled + label:after {
    color: #dcdcdc;
}
.nfTextField {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 16px;
    border: solid 1px #8c8c8c;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    display: block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    color: #000;
    padding: 10px 11px;
    height: 44px;
}
.nfTextField:invalid,
.nfTextField:valid {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
}
.nfTextField:focus {
    border-color: #0071eb;
    outline: 0;
}
.nfTextField:disabled {
    color: #a6a6a6;
    border-color: #ccc;
}
.nfInput {
    max-width: 500px;
    position: relative;
}
.nfInput .nfInputPlacement {
    position: relative;
}
.nfInput .placeLabel {
    position: absolute;
    top: 50%;
    left: 10px;
    color: #8c8c8c;
    font-size: 14px;
    -webkit-transition: font 0.1s ease, top 0.1s ease, -webkit-transform 0.1s ease;
    transition: font 0.1s ease, top 0.1s ease, -webkit-transform 0.1s ease;
    -o-transition: font 0.1s ease, top 0.1s ease, -o-transform 0.1s ease;
    -moz-transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease,
        -moz-transform 0.1s ease;
    transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease;
    transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease,
        -webkit-transform 0.1s ease, -moz-transform 0.1s ease,
        -o-transform 0.1s ease;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
}
@media only screen and (min-width: 740px) {
    .nfInput .placeLabel {
        font-size: 16px;
    }
}
.nfInput .nfTextField {
    height: 48px;
    padding: 10px 10px 0;
    width: 100%;
}
.nfInput .nfTextField:focus + .placeLabel {
    top: 4px;
    font-size: 11px;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
}
.nfEmailPhoneControls {
    position: relative;
}
.nfEmailPhoneControls .nfTextField::-ms-clear {
    background: 0 0;
    color: #8c8c8c;
    height: 24px;
    margin-top: -10px;
    width: 24px;
}
.nfPasswordInput {
    position: relative;
    z-index: 0;
}
.nfPasswordInput .nfTextField {
    background: 0 0;
}
.nfPasswordInput .nfTextField::-ms-clear,
.nfPasswordInput .nfTextField::-ms-reveal {
    background: 0 0;
    color: #8c8c8c;
    height: 24px;
    margin-top: -10px;
    width: 24px;
}
.nfPasswordControls {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    background: #fff;
}
.nfPasswordControls > label {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -moz-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}
.nfPasswordToggle {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: #8c8c8c;
    font-size: 14px;
    border: 0;
    background: 0 0;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -moz-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.btn {
    display: inline-block;
    text-decoration: none;
    line-height: 1em;
    vertical-align: middle;
    cursor: pointer;
    font-weight: 400;
    letter-spacing: 0.1px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: 0;
    position: relative;
    color: #000;
    background-color: #e6e6e6;
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#e6e6e6),
        to(#ddd)
        );
    background-image: -webkit-linear-gradient(top, #e6e6e6, #ddd);
    background-image: -moz- oldlinear-gradient(top, #e6e6e6, #ddd);
    background-image: -o-linear-gradient(top, #e6e6e6, #ddd);
    background-image: linear-gradient(to bottom, #e6e6e6, #ddd);
    -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
}
.btn:hover {
    text-decoration: none;
    background: #eaeaea;
    -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
}
.btn:active {
    background: #c2c2c2;
}
.btn-submit {
    color: #fff;
    background-color: #0080ff;
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#0080ff),
        to(#0277ec)
        );
    background-image: -webkit-linear-gradient(top, #0080ff, #0277ec);
    background-image: -moz- oldlinear-gradient(top, #0080ff, #0277ec);
    background-image: -o-linear-gradient(top, #0080ff, #0277ec);
    background-image: linear-gradient(to bottom, #0080ff, #0277ec);
    -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.55);
    -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.55);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.55);
}
.btn-submit:hover {
    background: #2490fd;
    -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.55);
    -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.55);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.55);
}
.btn-submit:active {
    background: #0166c9;
}
.btn {
    position: relative;
    font-size: 1em;
    padding: 24.5px 2em;
    min-width: 74px;
    min-height: 50px;
    margin: 0.5em 0.5em 0.5em 0;
}
@media only screen and (max-width: 500px) {
    .btn {
        width: 100%;
        margin: 0.5em auto;
    }
}
.btn.btn-small {
    display: block;
    width: 100%;
    padding: 0;
    margin: 0.5em auto;
    line-height: 50px;
}
@media only screen and (min-width: 500px) {
    .btn.btn-small {
        display: inline-block;
        font-size: 13px;
        padding: 12px 2em;
        min-width: 98px;
        min-height: 37px;
        margin-right: 0.5em;
        padding-left: 1em;
        padding-right: 1em;
        width: auto;
        line-height: 1em;
    }
}
.recaptcha-terms-of-use {
    position: relative;
    text-align: left;
}
.recaptcha-terms-of-use--link-button {
    background-color: transparent;
    border: none;
    color: #0071eb;
    cursor: pointer;
    display: inline;
    font-family: inherit;
    font-size: inherit;
    padding: 0;
}
.recaptcha-terms-of-use--link-button:hover {
    text-decoration: underline;
}
.recaptcha-terms-of-use--link-button:focus {
    outline: 0;
}
.recaptcha-terms-of-use--disclosure {
    visibility: hidden;
    opacity: 0;
    -webkit-transition: height 0.5s ease, opacity 0.5s ease;
    -o-transition: height 0.5s ease, opacity 0.5s ease;
    -moz-transition: height 0.5s ease, opacity 0.5s ease;
    transition: height 0.5s ease, opacity 0.5s ease;
}
.login-input {
    padding-bottom: 24px;
}
.login-form {
    margin-bottom: 10px;
}
.login-button.btn {
    width: 100%;
    background: #e50914;
}
@media only screen and (min-width: 500px) {
    .login-button.btn {
        padding: 16px;
        font-size: 18px;
    }
}
@media only screen and (min-width: 360px) {
    .login-button.btn {
        width: 100%;
        max-width: 100%;
    }
}
.recaptcha-terms-of-use {
    margin-top: 11px;
    font-size: 13px;
    color: #8c8c8c;
}
.hybrid-login-wrapper {
    background-color: #000;
    color: #fff;
}
.hybrid-login-wrapper .nfHeader {
    background: 0 0;
    border: 0;
}
.hybrid-login-wrapper .login-wrapper-background {
    opacity: 0.5;
}
.hybrid-login-form {
    background-color: rgba(0, 0, 0, 0.75);
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 0;
    min-height: 515px;
    padding: 20px 0 30px;
    width: 100%;
}
.hybrid-login-form.hybrid-login-form-signup {
    min-height: 550px;
}
@media only screen and (min-width: 740px) {
    .hybrid-login-form {
        min-height: 625px;
        padding: 60px 68px 40px;
        margin-bottom: 90px;
    }
    .hybrid-login-form.hybrid-login-form-signup {
        min-height: 660px;
    }
}
.hybrid-login-form .hybrid-login-form-main {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -moz-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}
.hybrid-login-form h1 {
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 28px;
}
.hybrid-login-form .nfInput {
    max-width: 100%;
}
.hybrid-login-form .nfTextField {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border: 0;
    color: #fff;
    height: 50px;
    line-height: 50px;
    padding: 16px 20px 0;
}
.hybrid-login-form .login-input {
    padding-bottom: 16px;
}
.hybrid-login-form .placeLabel {
    left: 20px;
}
.hybrid-login-form .nfTextField:focus + .placeLabel {
    top: 7px;
}
.hybrid-login-form .nfEmailPhoneControls {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border: 0;
}
.hybrid-login-form .nfEmailPhoneControls .nfTextField {
    background: #333;
}
.hybrid-login-form .nfEmailPhoneControls .nfTextField:focus {
    background: #454545;
}
.hybrid-login-form .nfEmailPhoneControls .nfTextField::-ms-clear {
    color: #8c8c8c;
    margin-top: -15px;
}
.hybrid-login-form .nfPasswordControls {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border: 0;
    background: #333;
}
.hybrid-login-form .nfPasswordControls .nfTextField {
    height: 50px;
}
.hybrid-login-form .nfPasswordControls .nfTextField::-ms-clear,
.hybrid-login-form .nfPasswordControls .nfTextField::-ms-reveal {
    color: #8c8c8c;
    margin-top: -15px;
}
.hybrid-login-form .nfPasswordControls .nfPasswordToggle {
    height: 50px;
    padding: 0 12px;
    display: none;
}
.hybrid-login-form .login-button {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
    margin: 24px 0 12px;
}
.hybrid-login-form .hybrid-login-form-help {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
}
.hybrid-login-form .login-remember-me {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -moz-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding-left: 20px;
}
.hybrid-login-form .login-remember-me input[type="checkbox"] + label {
    padding: 0;
}
.hybrid-login-form .login-remember-me input[type="checkbox"] + label::before {
    background: #737373;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    border: 0;
    height: 16px;
    left: -20px;
    width: 16px;
}
.hybrid-login-form
.login-remember-me
input[type="checkbox"]:active
+ label::before,
.hybrid-login-form
.login-remember-me
input[type="checkbox"]:focus
+ label::before {
    background: #e6e6e6;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
}
.hybrid-login-form
.login-remember-me
input[type="checkbox"]:checked
+ label::after {
    color: #000;
    font-size: 18px;
    left: -21px;
    top: 0;
}
.hybrid-login-form .login-remember-me-label-text {
    color: #b3b3b3;
    font-size: 13px;
    font-weight: 500;
}
.hybrid-login-form .login-help-link {
    cursor: pointer;
    color: #b3b3b3;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 1;
    -moz-box-flex: 0;
    -ms-flex: 0 0 1;
    flex: 0 0 1;
    font-size: 13px;
    font-weight: 500;
    padding-top: 2px;
}
.hybrid-login-form .hybrid-login-form-other {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 1;
    -moz-box-flex: 0;
    -ms-flex: 0 0 1;
    flex: 0 0 1;
}
.hybrid-login-form .login-form {
    margin-bottom: 0;
}
.hybrid-login-form .login-signup-now {
    color: #737373;
    font-size: 16px;
    font-weight: 500;
    margin-top: 16px;
}
.hybrid-login-form .login-signup-now a {
    color: #fff;
}
/*! CSS Used fontfaces */
@font-face {
    font-family: nf-icon;
    src: url(https://assets.nflxext.com/ffe/siteui/fonts/nf-icon-v1-93.eot);
    src: url(https://assets.nflxext.com/ffe/siteui/fonts/nf-icon-v1-93.eot?#iefix)
        format("embedded-opentype"),
        url(https://assets.nflxext.com/ffe/siteui/fonts/nf-icon-v1-93.woff)
        format("woff"),
        url(https://assets.nflxext.com/ffe/siteui/fonts/nf-icon-v1-93.ttf)
        format("truetype"),
        url(https://assets.nflxext.com/ffe/siteui/fonts/nf-icon-v1-93.svg#nf-icon-v1-93)
        format("svg");
    font-weight: 400;
    font-style: normal;
}


CSS;

$this->registerCss($css);
?>