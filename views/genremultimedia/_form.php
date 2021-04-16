<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;
use app\models\Genre;
use app\models\Multimedia;

/* @var $this yii\web\View */
/* @var $model app\models\Genremultimedia */
/* @var $form yii\widgets\ActiveForm */
$genre = ArrayHelper::map(Genre::find()->all(), 'idgenre', 'genre');
$multimedia = ArrayHelper::map(Multimedia::find()->all(), 'idmultimedia', 'titulo');
?>

<div class="genremultimedia-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'fkgenre')->dropDownList($genre, ['prompt' => 'Seleccionar uno']) ?>

    <?= $form->field($model, 'fkmultimedia')->dropDownList($multimedia, ['prompt' => 'Seleccionar uno']) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
