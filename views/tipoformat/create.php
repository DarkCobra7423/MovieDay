<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Tipoformat */

$this->title = 'Create Tipoformat';
$this->params['breadcrumbs'][] = ['label' => 'Tipoformats', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="tipoformat-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
