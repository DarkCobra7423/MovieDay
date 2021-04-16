<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use yii\helpers\ArrayHelper;
use app\models\Chapter;
use app\models\Language;

/* @var $this yii\web\View */
/* @var $model app\models\Chapterlanguage */
/* @var $form yii\widgets\ActiveForm */
$chapter = ArrayHelper::map(Chapter::find()->all(), 'idcapter', 'name');
$language = ArrayHelper::map(Language::find()->all(), 'idlanguage', 'language');
?>

<div class="chapterlanguage-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'fkchapter')->dropDownList($chapter, ['prompt' => 'Seleccionar uno']) ?>

    <?= $form->field($model, 'fklanguage')->dropDownList($language, ['prompt' => 'Seleccionar uno']) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
