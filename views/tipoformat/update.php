<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Tipoformat */

$this->title = 'Update Tipoformat: ' . $model->idtipoformat;
$this->params['breadcrumbs'][] = ['label' => 'Tipoformats', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->idtipoformat, 'url' => ['view', 'id' => $model->idtipoformat]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="tipoformat-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
