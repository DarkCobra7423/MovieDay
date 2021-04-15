<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Multimediaprotagonist */

$this->title = 'Create Multimediaprotagonist';
$this->params['breadcrumbs'][] = ['label' => 'Multimediaprotagonists', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="multimediaprotagonist-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
