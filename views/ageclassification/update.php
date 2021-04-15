<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Ageclassification */

$this->title = 'Update Ageclassification: ' . $model->idageclassification;
$this->params['breadcrumbs'][] = ['label' => 'Ageclassifications', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->idageclassification, 'url' => ['view', 'id' => $model->idageclassification]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="ageclassification-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
