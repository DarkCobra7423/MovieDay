<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Audio */

$this->title = 'Update Audio: ' . $model->idaudio;
$this->params['breadcrumbs'][] = ['label' => 'Audios', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->idaudio, 'url' => ['view', 'id' => $model->idaudio]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="audio-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
