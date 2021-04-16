<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Protagonist */

$this->title = 'Create Protagonist';
$this->params['breadcrumbs'][] = ['label' => 'Protagonists', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="protagonist-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
