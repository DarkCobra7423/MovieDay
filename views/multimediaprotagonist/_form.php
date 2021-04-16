<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;
use app\models\Multimedia;
use app\models\Protagonist;

$multimedia = ArrayHelper::map(Multimedia::find()->all(), 'idmultimedia', 'titulo');
$protagonist = ArrayHelper::map(Protagonist::find()->all(), 'idprotagonist', 'protagonist');

/* @var $this yii\web\View */
/* @var $model app\models\Multimediaprotagonist */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="multimediaprotagonist-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'fkmultimedia')->dropDownList($multimedia, ['prompt' => 'Select one']) ?>

    <?= $form->field($model, 'fkprotagonist')->dropDownList($protagonist, ['prompt' => 'Select one']) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
