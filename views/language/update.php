<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Language */

$this->title = 'Update Language: ' . $model->idlanguage;
$this->params['breadcrumbs'][] = ['label' => 'Languages', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->idlanguage, 'url' => ['view', 'id' => $model->idlanguage]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="language-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
