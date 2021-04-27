<?php

use webvimark\modules\UserManagement\models\User;
use yii\helpers\Html;

/* @var $this yii\web\View */

$this->title = 'MovieDay';
?>
<h1><?= Html::encode($this->title) ?></h1>	

<?php if (User::hasRole(['Admin'])) { ?>
    <?= Html::a(Html::img(yii::$app->homeUrl. "/images/boton.png"), ['/alumnos/index'], ["class" => "menu"]); ?>
    <?= Html::a(Html::img(yii::$app->homeUrl. "/images/boton.png"), ['/cardex/index'], ["class" => "menu"]); ?>
    <?= Html::a(Html::img(yii::$app->homeUrl. "/images/boton.png"), ['/calificaciones/index'], ["class" => "menu"]); ?>
    <?= Html::a(Html::img(yii::$app->homeUrl. "/images/boton.png"), ['/carreras/index'], ["class" => "menu"]); ?>
    <?= Html::a(Html::img(yii::$app->homeUrl. "/images/boton.png"), ['/profesores/index'], ["class" => "menu"]); ?>
    <?= Html::a(Html::img(yii::$app->homeUrl. "/images/boton.png"), ['/coordinadores/index'], ["class" => "menu"]); ?>
<?php } else if (User::hasRole(['profesores'])) { ?>
    <?= Html::a(Html::img(yii::$app->homeUrl. "/images/boton.png"), ['/profesores/index'], ["class" => "menu"]); ?>
    <?= Html::a(Html::img(yii::$app->homeUrl. "/images/boton.png"), ['/calificaciones/index'], ["class" => "menu"]); ?>
<?php } else if (User::hasRole(['coordinadores'])) { ?>
    <?= Html::a(Html::img(yii::$app->homeUrl. "/images/boton.png"), ['/coordinadores/index'], ["class" => "menu"]); ?>
    <?= Html::a(Html::img(yii::$app->homeUrl. "/images/boton.png"), ['/alumnos/index'], ["class" => "menu"]); ?>
    <?= Html::a(Html::img(yii::$app->homeUrl. "/images/boton.png"), ['/carreras/index'], ["class" => "menu"]); ?>
<?php }
if (User::hasRole(['alumnos', 'profesores', 'coordinadores'])) {
    ?>
    <?= Html::a(Html::img(yii::$app->homeUrl. "/images/boton.png"), ['/plantel/index'], ["class" => "menu"]); ?>
    <?= Html::a(Html::img(yii::$app->homeUrl. "/images/boton.png"), ['/director/index'], ["class" => "menu"]); ?>
<?php }
if (!Yii::$app->user->isGuest) {
    ?>
    <?= Html::a(Html::img(yii::$app->homeUrl. "/images/logout.png"), ['/user-management/auth/logout'], ["class" => "menu"]); ?>
<?php } ?>