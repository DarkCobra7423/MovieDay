<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Genremultimedia */

$this->title = 'Update Genre Multimedia: ' . $model->fkgenre;
$this->params['breadcrumbs'][] = ['label' => 'Genremultimedia', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->fkgenre, 'url' => ['view', 'fkgenre' => $model->fkgenre, 'fkmultimedia' => $model->fkmultimedia]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="genremultimedia-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
