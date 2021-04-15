<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Ageclassification */

$this->title = 'Create Ageclassification';
$this->params['breadcrumbs'][] = ['label' => 'Ageclassifications', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="ageclassification-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
