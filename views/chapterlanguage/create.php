<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Chapterlanguage */

$this->title = 'Create Chapterlanguage';
$this->params['breadcrumbs'][] = ['label' => 'Chapterlanguages', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="chapterlanguage-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
