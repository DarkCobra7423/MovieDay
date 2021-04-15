<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Genremultimedia */

$this->title = 'Create Genremultimedia';
$this->params['breadcrumbs'][] = ['label' => 'Genremultimedia', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="genremultimedia-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
